---
layout: page
title: "OAuth Scopes"
category: api
date: 2016-06-22 15:57:45
active_item: ""
order: 2
---

Scopes define permissions for clients or applications. When a developer is creating an application, they choose a list of permissions (scopes) which will be granted to this application. For example, an application greeting a user with _Hello {username}!_ won't work unless the scope `user.read` is enabled. 

{: .info}
**Important!** Applications should request only the list of permissions they truly need, otherwise a paranoid user could be discouraged from installing the application.

In previous chapter on [authorization](authorization.html) we discussed the _online/offline mode_ and also mentioned the three types of applications. Now, it is very important to understand this concept, mainly that **in the offline mode, apps have different permissions than in the online mode**. The online mode is straightforward, all scopes can be used and will work as expected. In the offline mode, however, it is a bit more complicated, for example, an app with the `project` type isn't allowed to request data about any user. Why? Well, how could it? Of which user? The app acts on behalf of a project and no user is authenticated. Anyway, chances are it won't really be such a big problem in your case. And if it is, you can ask a question on our forum.

In this chapter, we describe the scopes currently defined throughout Mergado to protect resources in our HTTP API. Each API endpoint is protected by at most one scope and if a client (an application) is not configured with that scope, it won't be able to request data from the endpoint (server returns `HTTP 403`). Note that we use the term _client_ as used in [RFC 6749](https://tools.ietf.org/html/rfc6749), which is usually an application in our case.

## User-specific scopes

Note that scopes in this section still won't suffice for the client in the _offline mode_ unless the app's type is configured as `user` (see [Authorization](authorization.html) for details about application types and modes). That is because it does make no sense for an app of the type `project` to read users' data when no user is actually authenticated.

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `user.read`

Client is authorized to access users' information. This includes a user's first name, username, email address, fakturoid ID, date of registration, etc.

</div>
<div class="right" markdown="1">

### `user.write`

Client is authorized to modify, create and delete users. There is currently no API endpoint which requires this scope as we currently see no use for such operations.

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `user.shops.read`

Client is allowed to view a list of eshops and their detailed info which individual users can access. Users are permitted to access an eshop if they are owners of the eshop or were provided the `reader` or `writer` rights.

</div>
<div class="right" markdown="1">

### `user.shops.write`

Similar to `user.shops.read` scope. However, client is able to perform create, delete and update operations on eshops where users are either owners or have been granted the `writer` permission.

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `user.notify.read`

Client can read users' notifications. This list of notifications includes system and core messages as well as notifications sent by other clients.

</div>
<div class="right" markdown="1">

### `user.notify.write`

Client is allowed to send new notifications to users. There are currently two types of notifications (`email` and `frontend`) and both can be created if having this scope.

</div>
<div class="clear"></div>
</div>

## Shop-specific scopes

Scopes here **usually** make sense in the _offline mode_ only if the app's type is configured as `shop` or `user`. However, there are exceptions, for example, the `shops.ga.read` scope.

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `shop.read`

Client is authorized to access an eshop's information. This includes a name of the eshop, domain, number of exported items, users with access to the eshop, etc.

</div>
<div class="right" markdown="1">

### `shop.write`

Client having this scope enabled is allowed to modify an eshop. This scope is of course very similar to `user.shops.write`, the main difference is that this scope works for apps with the `shop` type in the _offline mode_ as well. Also, the `user.shops.write` scope can be technically used to create new eshops (although there is currently no endpoint supporting this).

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `shop.ga.read`

Client is authorized to read Google Analytics data of eshops. For each app, the permissions slightly differ (this concerns only the offline mode):

- `project` app: Client can read all GA data of the eshop that current project belongs to.
- `shop` app: Client can read all GA data of current eshop. 
- `user` app: Client can read all GA data of eshops that current user has access to.

Note that each user must grant the rights to Mergado explicitly in [Keychain](https://store.mergado.com/detail/mergadokeychain/) before any data can be accessed by the client.

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `shop.stats.read`

Client is allowed to access statistics of eshops. Note that statistics need to be collected by Mergado beforehand which requires owners and writers to fill the relevant data in [Keychain](https://store.mergado.com/detail/mergadokeychain/).

</div>
<div class="right" markdown="1">

### `shop.stats.write`

Client is authorized to collect statistics of an eshop. There is currently no API endpoint which allows this action.

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `shop.projects.read`

Client can access all projects (i.e. exports) and their basic information in each eshop. However, clients are not able to view elements, rules, queries, etc. even if this scope is enabled.

</div>
<div class="right" markdown="1">

### `shop.projects.write`

Client is authorized to perform CRUD operations on projects of an eshop. This does not mean the client will be permitted to create new rules, queries, and so on which requires a set of special permissions.

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `shop.notify.read`

Client is allowed to access notifications sent to members of eshops including system and core messages.

</div>
<div class="right" markdown="1">

### `shop.notify.write`

Client is authorized to send new notifications to members of eshops.

</div>
<div class="clear"></div>
</div>

## Project-specific scopes

The set of scopes in this section work in both the online and the offline modes for all three types of apps (`project`, `shop` and `user`).

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `project.read`

Client is authorized to access projects' information. For example, name of the project, URL of XML feed, number of exported items etc.

</div>
<div class="right" markdown="1">

### `project.write`

Client is authorized to modify a project. This scope doesn't include creation of new rules, queries, elements, and so on which requires another scope.

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `project.ga.read`

Client is authorized to read data in Google Analytics for a specific `output` format of a project. This scope is very similar to `shop.ga.read`, the only difference is that Mergado implicitly forwards the `ga:filter` field in each request to the GA API which returns data of the relevant shopping service only (e.g. if the output format is `heureka.cz`, the filter is set to return conversions, clicks and other information from Heureka only).

- `project` app: Client can read Google Analytics data the current project _(that is: GA data of the e-shop that current project belongs to, filtered by the project's output format)_. 
- `shop` app: Client can read Google Analytics data of all projects that belong to the current e-shop.
- `user` app: Client can read all Google Analytics data of all projects that current user has access to.

Note that each user must grant the rights to Mergado explicitly in [Keychain](https://store.mergado.com/detail/mergadokeychain/) before any data can be accessed by the client (i.e. the app).

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `project.rules.read`

Client is allowed to view all rules instantiated in a project. Rules are usually instantiated (i.e. created) by users but can also be instantiated by an app.

</div>
<div class="right" markdown="1">

### `project.rules.write`

Client is authorized to remove, update or instantiate new rules in a project. Rules may be instantiated by apps and also by Mergado users.

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `project.queries.read`

Client is authorized to read a project's queries. Queries are usually compiled by users in Mergado UI, but can also be created by an app.

</div>
<div class="right" markdown="1">

### `project.queries.write`

Client is authorized to read, remove or compile a new queries in a project. Queries can than be used to filter products (see the scope `project.products.read`).

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `project.elements.read`

Client is authorized to view a project's elements, their names, whether a particular element was hidden or not, and so on.

</div>
<div class="right" markdown="1">

### `project.elements.write`

Client is allowed to create new elements in a project and also modify or remove elements from a project.

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `project.variables.read`

Client is authorized to view a project's variables, their names, types and other useful information.

</div>
<div class="right" markdown="1">

### `project.variables.write`

Client is authorized to remove, modify and create new variables in a project.

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `project.products.read`

Client is authorized to view a project's products. This scope also suffices when the client needs to filter products using queries.

</div>
<div class="right" markdown="1">

### `project.products.write`

Client is authorized to remove, modify and create new products in a project.

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `project.stats.read`

Client is authorized to access a project's statistics and also use advanced analytics.

</div>
<div class="right" markdown="1">

### `project.stats.write`

Client is authorized to collect new statistics of a project. Currently, there is no endpoint which requires this scope.

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `project.feedaudits.read`

Client is authorized to read results of an audit of a project's XML feed, also view all issues the audit raised and some additional data (e.g. missing elements, wrong format of CATEGORYTEXT etc.).

</div>
<div class="right" markdown="1">

### `project.feedaudits.write`

Client is authorized to perform new validations of a project's XML feed. We call this kind of validation an (XML) audit.

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `project.tasks.read`

Client is authorized to view past _tasks_ performed in a project. These tasks are called _'import from XML'_, _'application of rules'_ and _'export to XML'_ (abbreviations are `import`, `apply` and `export`). Included are tasks that were performed automatically.

</div>
<div class="right" markdown="1">

### `project.tasks.write`

Client is allowed to perform tasks (import from XML, application of rules and export to XML) in a project.

</div>
<div class="clear"></div>
</div>

<div class="two-columns" markdown="1">
<div class="left" markdown="1">

### `project.logs.read`

Client is authorized to access a project's logs. These logs consist of tasks performed in the past and also downloads of output XML feeds by third-party services.

</div>
<div class="clear"></div>
</div>
