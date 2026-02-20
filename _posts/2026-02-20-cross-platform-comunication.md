---
layout: page
title: "Cross-Platform Communication"
category: apps
date: 2026-02-20 00:00:00
active_item: ""
order: 7
---

{: .message}
**Planned — not yet implemented:** This document describes future API changes that are designed but not yet available. It is published early to allow app (extension) developers to validate the proposed design and to begin preparation before the feature is officially released.

This document describes how communication between apps (extensions), external applications, and Mergado is intended to work once the new cross-platform communication layer is in place. Everything builds on top of the existing Mergado API authorization model — no new authorization system is introduced.

Four communication scenarios are supported:

- **App → Mergado** — an app calls the Mergado API on behalf of an entity.
- **External application → Mergado** — an external application calls the Mergado API directly.
- **App → App** — a request is forwarded through Mergado to another app.
- **External application → App** — same as above, initiated by an external application.

## App → Mergado and External Application → Mergado

These two scenarios work exactly as they do today, using the existing OAuth 2.1 authorization described in the [Authorization](authorization.html) and [OAuth Scopes](oauth-scopes.html) documentation. No changes are required.

## Calling an App via the Proxy

### Proxy Endpoint

A new endpoint will be introduced in the Mergado API that acts as a transparent proxy to any registered app:

```
https://api.mergado.com/apps/{app_name}/proxy/{path}
```

Any HTTP request sent to this endpoint is intercepted by Mergado, which:

1. Verifies that the caller holds a valid Mergado API token issued for the entity specified in the request.
2. Generates a short-lived **JWT token** encoding the caller's identity and permissions.
3. Attaches the JWT token to the `Authorization` header.
4. Forwards the request unchanged to the target app.

The app receives the request as-if it came directly from the caller, with the JWT token already attached.

### JWT Token

The JWT token added by Mergado to every proxied request contains the following fields:

Field          | Description
-------------- | -----------
`entity_id`   | ID of the entity making the request (user, shop, or project ID).
`entity_type` | Type of the entity: `user`, `shop`, or `project`.
`scopes`      | Intersection of the caller's OAuth scopes and the target app's registered scopes.
`expires_at`         | Expiration timestamp — approximately **5 minutes** from the time of issue.

{: .message}
**Important:** JWT tokens are **not refreshable**. Each proxied request receives its own fresh token valid for ~5 minutes. Once expired, the token cannot be used and a new request must be made.

### Using the JWT Token for Further API Calls

The app can take the received JWT token and use it as a `Bearer` token in subsequent calls to the Mergado API:

```
Authorization: Bearer <jwt_token>
```

Requests made with this token behave as if the original entity were making them directly — with permissions limited to the scope intersection in the token. This means:

- The app **does not need to independently verify** whether the caller has access to Mergado resources — it can simply forward the token and let the API enforce access.
- The token can be passed to any standard Mergado API endpoint the caller would have been permitted to access.

## Access Control

{: .info}
**Scope of this section:** The rules described below apply only when the app serves its **own data that belong to entities other than the one the token was issued for** — for example, when a `user` token is used to request data the app stores per-shop or per-project. If the app only operates on the entity named in the token itself, no additional access checks are needed beyond the scopes in the JWT.

Every proxied request carries a JWT token whose `entity_type` identifies the kind of caller. Access rules differ significantly depending on this type, so the app must handle each case correctly.

### Token entity types and their access model

### `shop` and `project` tokens

When the JWT contains `entity_type: shop` or `entity_type: project`, both `read` and `write` access are **fully defined by the OAuth scopes** present in the token.

### `user` tokens

When the JWT contains `entity_type: user`, the situation is more nuanced. OAuth scopes still apply, but Mergado's **permission system** adds additional restrictions that determine which specific entities (shops, projects) the user can access:

- A request targeting the **user themselves** (e.g. reading their own settings) is implicitly permitted — the proxy has already verified this.
- A request targeting **a different entity** (a shop or project) requires the app to explicitly verify whether the user actually has access to that entity. This cannot be inferred from the JWT alone.

{: .info}
**Access hierarchy:** If a user has access to a given shop, they implicitly have access to all projects belonging to that shop. An access check on the shop is therefore sufficient to cover all its projects.

### `read` or `write` access does not imply full access

Even when the app confirms that a user has access to a shop or project, the **OAuth scopes in the JWT still limit what can actually be changed**. In other words `write` access only means the permission system permits modifications — the scopes determine *which* modifications are allowed.

{: .message}
**The app is always responsible for checking both access and scopes.** A positive access check result combined with a scope check on the JWT is required before any read or write operation is performed. Neither check alone is sufficient.

### Access Check Endpoint

To verify whether the caller (identified by the JWT token) has `read` or `write` access to one or more target entities, the app sends a `POST` request to:

```
POST https://api.mergado.com/access/check
Authorization: Bearer <jwt_token>
```

The request body lists the entities and access levels to check:

```json
{
  "checks": [
    { "entity_type": "shop",    "entity_id": 42},
    { "entity_type": "project", "entity_id": 123},
    { "entity_type": "shop",    "entity_id": 99}
  ]
}
```

The endpoint always returns `HTTP 200` with a result for each requested check:

```json
{
  "results": [
    { "entity_type": "shop",    "entity_id": 42,  "access": "write", "allowed": true  },
    { "entity_type": "project", "entity_id": 123, "access": "read",  "allowed": true  },
    { "entity_type": "shop",    "entity_id": 99,  "access": "write", "allowed": false }
  ]
}
```

See the [API documentation](https://docs.mergado.apiary.io/) *(future link)* for full details.

#### When to call the access check endpoint

Scenario | Required?
-------- | ---------
`shop` or `project` token, `read` or `write` operations | No — consult `scopes` in JWT only.
`user` token, targeting the user themselves | No — consult `scopes` in JWT only.
`user` token, targeting a shop or project | **Yes** — explicit check required.

#### Example

An app receives a request (with a `user` JWT) to write data for shop `42` and project `123`. Before applying any changes it performs a single bulk check:

```
POST https://api.mergado.com/access/check
Authorization: Bearer <jwt_token>

{
  "checks": [
    { "entity_type": "shop",    "entity_id": 42,  "access": "write" },
    { "entity_type": "project", "entity_id": 123, "access": "write" }
  ]
}
```

If both results return `"allowed": true`, the app proceeds — but still verifies the relevant `scopes` from the JWT before executing each individual operation.

However, if the app already knows that project `123` belongs to shop `42`, it can skip the project check entirely and only ask about the shop — access to the shop hierarchically implies access to all its projects:

```
POST https://api.mergado.com/access/check
Authorization: Bearer <jwt_token>

{
  "checks": [
    { "entity_type": "shop", "entity_id": 42, "access": "write" }
  ]
}
```

## App Discovery via `.mergado-known`

Apps (extensions) may optionally expose a discovery document at a mergado-known URL on their host:

```
GET https://<your-extension-host>/.mergado-known/scopes
```

Mergado will fetch this document to discover **custom scopes** defined by the app. Once registered, these custom scopes can be referenced by users — for example, when creating personal access tokens or when one app authorizes another.

A minimal discovery document:

```json
{
  "scopes": [
    {
      "name": "myextension.data.read",
      "description": "Allows reading data from My Extension."
    },
    {
      "name": "myextension.data.write",
      "description": "Allows modifying data in My Extension."
    }
  ]
}
```

{: .info}
**Future use:** The `.mergado-known` endpoint is also planned to serve as the foundation for unified **MCP (Model Context Protocol)** support. Apps will be able to publish a description of their available tools at a well-known address, allowing Mergado and other systems to discover and invoke app capabilities in a standardized way. The exact endpoint path and document format for MCP will be specified separately once the design is finalized.
