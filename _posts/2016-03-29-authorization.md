---
layout: page
title: "Authorization"
category: api
date: 2016-03-29 16:56:33
active_item: ""
---

To access Mergado API, clients (e.g. an application) are authenticated using [OAuth 2.0](https://tools.ietf.org/html/rfc6749). Each application is required to have its OAuth credentials which can be obtained from the Mergado [developers center](https://developers.mergado.com) (when you register your application, a client ID and a secret key is assigned to your application).

If you are familiar with the OAuth protocol, you already know that with every access to a protected resource (our API), clients need to provide an _access token_. Our authorization server supports two authorization grants which can be used to obtain access tokens:

* **Online mode**, which is similar to the `authorization_code` grant in OAuth 2.0.
* **Offline mode**, which is similar to the `refresh_token` grant type.

## Online mode

An access token is obtained using the `autherization_code` grant defined in the OAuth 2.0 authorization framework. This mode is used when the end-user (aka the resource owner) is capable of receiving incoming requests (typically via redirection in a web browser). If the end-user is not interacting with a web browser (i.e. is not currently working in Mergado) but an application needs to access a protected resource, the `refresh_token` grant described in the _Offline Mode_ section must be used.

To obtain an access token using the `authorization_code` grant type, the following steps need to be taken:

1. A client (application) sends a GET request to `https://app.mergado.com/oauth2/authorize/` with the following query string parameters:
    + `client_id` -- An OAuth client ID.
    + `redirect_uri` -- Redirection URI to which the authorization server will send the end-user back once access is granted (or denied).
    + `grant_type` -- `authorization_code`.
    + `response_type` -- `code`, this tells the authorization server that we want to return an authorization code which will be exchanged with an access token.
    + `entity_id` -- ID of the entity the client wants access to.
   
   **Example:**

   ```
   https://app.mergado.com/oauth2/authorize/
   ?client_id=123
   &redirect_uri=https://appcloud.mergado.com
   &response_type=code
   &grant_type=authorization_code
   ```
2. Authorization server redirects to the given redirection URI with a newly created authorization code (e.g. `https://app.mergado.com/?code=jkl`).
3. A client (application) send a POST request to `https://app.mergado.com/oauth2/token/` with the following JSON encoded fields:
    + `client_id` -- An OAuth client ID.
    + `client_secret` -- An OAuth secret key.
    + `redirect_uri` -- Redirection URI to which the authorization server will send the end-user back once access is granted (or denied).
    + `grant_type` -- `authorization_code`.
    + `code` -- Authorization code obtained in the previous step.
4. The authorization server responses with an access token (if the access is granted):

   ```json
   {
       "access_token": "ras11",
       "expires_in": 3600,
       "token_type": "bearer",
       "entity_id": "5",
       "user_id": "1"
   }
   ```

## Offline mode

An access token is obtained using the `refresh_token` grant type. When an application needs to access protected resource (e.g. to hide/unhide some products) but the end-user cannot interact with Mergado in a web browser, we say that it works in the offline mode.

{: .warning}
**Warning!** Never use this mode in cases where the end-user is interacting with your application via a web browser. The mode is called _offline_ for good reason and if used incorrectly, it can create a security threat, potentially allowing an attacker to exploit a vulnerability in your application.

In offline mode, the access token is obtained by the following steps:

1. A client (application) sends a POST request to `https://app.mergado.com/oauth2/token/` with the following JSON encoded fields:
    + `client_id` -- An OAuth client ID.
    + `client_secret` -- An OAuth secret key.
    + `grant_type` -- `refresh_token`.
    + `refresh_token` -- Entity ID encoded in base64, i.e. if entity ID is `5`, the refresh token is `NQ==` (if you are wondering why we require the entity ID to be encoded in base64: there is no rational reason, it probably just looks better).
2. The authorization server responses with an access token (if the access is granted):

   ```json
   {
       "access_token": "f192d",
       "expires_in": 3600,
       "token_type": "bearer",
       "entity_id": "5"
   }
   ```

{: .info}
**Info:** Access tokens obtained in the offline mode have somewhat different permissions than tokens obtained in the online mode. Permissions in the offline mode depend on the type of application (or the entity type). For example, if an application is created for eshops (entity type is `shop`) in the offline mode, it won't be able to access information of any user since the access token is created on behalf of an eshop. In the online mode, a protected resource is always accessed on behalf of an end-user - this means that with the appropriate scope, an application can access this user's information.
