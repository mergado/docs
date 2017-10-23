---
layout: page_toc
title: "Changelog"
active_item: "changelog"
---

# Roadmap

## 2017

- Improve application-defined rules API and their management in the Developer Center.
- Mergado UI CSS framework.

# Changelog

All notable changes to this project will be documented in this file.

## Mergado Apps 0.3.8
- 2017-10-20

### Added
- Mergado supports a new format - Glami for Hungary
- On the app's detail page developers can view the list of subjects who enabled the app. This can be useful for debugging.
- The list of apps in the Store can be ordered by the rating of users.

## Změny

- Updated [List Project Queries](http://docs.mergado.apiary.io/#reference/core/queries/list-project-queries) API endpoint: The queries of a project are ordered by the name. However, the query which returns all products is always first.
- [API endpoint `Show Eshop Info`](http://docs.mergado.apiary.io/reference/core/eshops/show-eshop-info) returns more information about collecton of statistics in the `stats_collection` field.
- [API endpoint for running tasks](http://docs.mergado.apiary.io/reference/core/tasks/create-a-task) returns HTTP status `423 Locked` (instead of `303 See Other`) for projects which are read only.
- Reminder about rating of an app is sent only to users who enabled the app.
- **Developers:** Apps are ordered by name now.
- **Store:** Rendering of apps in [Store](https://store.mergado.com) has been optimized and loading is now several times faster.
- Grayscale icon of apps (in developer stage) also in notifications.

## Opravy

- Fixed `500 Server Eror` when editing rules via its relevant [API endpoint](http://docs.mergado.apiary.io/reference/core/rules/update-a-rule). The error occured when the client requested modification of queries in the same request.
- Fixed errors of the kind `"Rule type 'tagstripping' not found."` which occured in several projects when requesting list of rules via API.
- **Store:** Default algorithm used for sorting apps in the [Store](https://store.mergado.com) contained a bug.
- **Store:** _Recommended apps_ on page with the detail of an app sometimes contained profiles of non-released apps. This was fixed.

## Mergado Apps 0.3.7
- 2017-09-14

### Added
- New formats:
  + [Favi](https://favi.cz/),
  + [Everysize](https://www.everysize.com/),
  + [Shopzilla](http://www.shopzilla.co.uk),
  + [Price grabber](http://www.pricegrabber.com/) and
  + [Skrz](https://skrz.cz/).
- Feed audit is able to process `CSV` files and supports new feed specifications: *Shoptet*, *Spartoo*, *Price Grabber* and *Everysize*.
- A new page _Releases_ in the Developers Center. The page contains overview of apps' development stages and versions.
- _App's profile strength score_ in the Developers Center. Profile strength represents how much information has been filled in.
- A new option in app's preferences - *URL of app's web page*. It is shown in Mergado Store.
- Users ratings of apps in the Developers Center.
- Bulk actions when edditing or creating new apps.
- Each request made by Mergado when processing app's rule contains a new field *apply_log_id*.
- The number of possible languages for localization in Mergado Store has been reduced so that it contains only the languages which are supported by Mergado.
- Mergado collects more data internally. A new graph was added with the number of enabled app's instances in the Developers Center.

### Fixed
- The content of the meta element _description_ has been shortened and contains only short description without _markdown_.
- Detection of user language preference in the Store has been improoved.

## Mergado Apps 0.3.6
- 2017-08-10

### Added

- **IFrame API:** New method `scrollTo(int px)` has been added to the *Mergado* object, which can be used to control vertical scrolling of the Mergado's parent window.
- **Appcloud:** Added support for *post-release* scripts which are executed at the end of each app's release. This can be used to perform neccessary database migrations or restart of long-runing tasks. The file `<app_home_dir>/app/mergado_post_release` is executed as the last command during app's release.
- **Developers:** Markdown supports image description with the `image` tag. Example: `{images=http://img.jpg#Image description,http://img2.jpg#Second description}`. Note that at this moment, it is not possible to use comma (`,`) in the description as it is used as a separator of each image.

### Changed

- The API endpoint **Show Eshop Info* responses with more information about ad systems in field ``info``.
- Deprecated fields `is_connected_to_<service>` hes been removed from the API endpoint **Show Eshop Info**.

## Mergado Apps 0.3.5
- 2017-07-12

### Added
- Eshops in Mergado can be connected with Google Adwords. Google Credentials API endpoint can be used to obtain an _access token_ for connected eshops.
- Mergado supports a new format [Spartoo](https://www.spartoo.cz/), including a converter from and to the format.
- Apps can be rated by users. Users can rate apps verbally or by giving it stars.
- Apps can have labels assigned in the Developers Center. This helps better categorization in Mergado Store.
- When a developer requests release of their app, it is possible to briefly describe what has changed, this helps our administrators with more precies review of the app and makes the release approval faster.

### Changed
- The apps bar in Mergado has been slightly improoved. For example, the current active (opened) app is now distinguishable from inactive apps.
- A new queue has been added for the rebuild of projects where the rebuild was induced by an API call.
- Apps and thair pricing plan is now bounded to currencies instead of countries.

### Fixed
- Fixed errors in language detection in Mergado Store.

## Mergado Apps 0.3.4
- 2017-06-14

### Added
- New features in the Mergado Store - a search box, filters, sorting and categories.
- Rating and the block "Other people also use ..." on the app page.
- A new feed format Shoptet.cz.
- A new API endpoint - Google credentials collection which returns access tokens and other credentials for authorization with Google APIs.
- Possibility to mark a product or a set of products as _updated_ so that Mergado processes these products during the next lazy rebuild.

### Fixed
- API does not allow clients to create elements and variables with invalid names. A 400 HTTP status is returned instead.
- Description of apps in the Developers Center is always correctly seved.

## Mergado Apps 0.3.3
- 2017-05-24

### Added

- Status of connection with linked shopping services to _Shop Info_ API endpoint.
- API endpoint containg the list of all available tariffs in Mergado.
- API endpoint for updating the _Shop_ collection.
- New API endpoints for requesting a list of enabled apps by a user, in an eshop or in a project.
- Upload of images using the Markdown editor via drag&drop.
- Screenshots and logos of apps can now be uploaded directly in the Developer Center.

### Fixed

- Running tasks on read-only projects results in the right HTTP status code.
- Passing empty values to the `limit` and `offset` fields in a GET request does not result in a 500 HTTP status.
- After a rule is created or updated via a PATCH or POST request, the change of a project's rules is recorded on the backend and the rule is correctly applied to products during the next scheduled application of rules.
- Losses of connections to Redis in PHP due to [a bug in RHEL 7](https://access.redhat.com/blogs/766093/posts/1976243).

## Mergado Apps 0.3.2
- 2017-03-08

### Added

- Support for measurements of conversions in the advertising systems AdWords, Sklik and Facebook for apps in Mergado Store.
- Support for [Ecommerce Tracking](https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce) in Mergado Store when apps are being enabled.
- Support of the `medium` query string parametr in the Google Analytics API endpoint.

### Fixed

- Markdown in email notifications supports more than one hyperlink.
- The generation of access token for offline mode if an app is of the type `user`.
- Rewritting URL of rules during app release.

## Mergado Apps 0.3.1
- 2017-02-08

### Added
- Support for restricted Markdown (bold, italic and links) in body of notifications sent via the API.
- New data and information is being scraped from [sluzby.heureka.cz](https://sluzby.heureka.cz), [sluzby.heureka.sk](https://sluzby.heureka.sk) and [admin.zbozi.cz](https://admin.zbozi.cz). This scraped data is collected every day and is available in the _Eshop Statistics_ API endpoint.
- Preinstalled [Sentry](https://github.com/getsentry) server for event logging is available on [App Cloud](https://sentry-appcloud.mergado.com).
- [Redis](https://redis.io/) (in-memory data store) for individual applications which can be used, for example, as a cache or a message broker.
- Developers may use `crontab` command in the dev stage of an app. The file is deployed on production when the app is released.
- In rules defined by apps, Mergado sends products to a specified hook with a few additional fields: `created_at`, `updated_at` and `output_changed_at`. See [Rules and Queries]({{ site.baseurl }}/apps/rules-and-queries.html).
- Mergado supports several new XML feed formats (Mailkit, CJ.com, and the specification of Shopalike was updated in Mergado).

### Fixed
- The [List Project Rules](http://docs.mergado.apiary.io/#reference/core/rules/list-project-rules) endpoint, see issue [#36](https://github.com/mergado/mergado-apps/issues/36).

## Mergado Apps 0.3.0
- 2017-01-11

### Added
- Ability to return an optional message to the user when an app could not be enabled or disabled.
- A new field `created_at` in the product API resource which holds the date when the product was imported into Mergado. Note that this information is available only for newly imported products.
- Added field `connections` to eshop info resource which holds information about connected services. The fields `is_connected_to_<name_of_service>` are deprecated now.
- Notifications in the Mergado UI sent by apps are rendered with their logo shown along with the message of the notification.
- Developers will be notified (in the Mergado notification center and by an email) when release requests of their apps are approved or rejected.
- Support for a new tag `{tip} ... {/tip}` in [Mergado Flavored Markdown]({{ site.baseurl }}/developers/markdown.html).

### Fixed
- Server error when creating a new rule with unknown `app_rule_type`.
- Server error when requesting access token in offline mode with an app of type `user`.

## Mergado Apps 0.2.5
- 2016-12-08

### Added
- Implicit grant type authorization.
- Long description of an app can be edited directly in the Developer Center. And it supports _Mergado Flavored Markdown_, which can be used to create a gallery of images or to insert a Youtube video.
- For each app it is now possible to configure the following:
  + A help page displayed in Mergado Store.
  + A link to a dedicated category on our Mergado Forum.
  + A defined set of keywords and a slogan for improving SEO in the Mergado Store.
- Added more information to app's homepage.
- Vendors now have their "homepage" in Mergado Store.

### Fixed
- Correct scope required in the API endpoint used to create new rules.
- Fixed the `shop.ga.read` scope support.

### Changed

- Slightly modified the appearance of widgets.

## Mergado Apps 0.2.4
- 2016-09-29

### Added
- Field `shop_name` in Feedaudit resources.
- New endpoint for sending notifications to users (Issue [#21](https://github.com/mergado/mergado-apps/issues/21)).

### Fixed
- Notification scopes (Issue [#22](https://github.com/mergado/mergado-apps/issues/22)).

## Mergado Apps 0.2.3
- 2016-06-29

### Added
- List of categories available on [Heureka](http://docs.mergado.apiary.io/#reference/heureka/heureka-categories).
- Google Analytics for all [eshop data](http://docs.mergado.apiary.io/#reference/google/analytics/eshop-data).
- List of supported [XML formats](http://docs.mergado.apiary.io/#reference/0/xml-formats/eshop-data) in Mergado.

## Mergado Apps 0.2.2
- 2016-06-01

### Added
- Mergado now calls app's constructor/destructor hooks when enabling or disabling an app, respectively (see [hooks]({{ site.baseurl }}/apps/app-hooks.html)).
- API endpoints for [tasks management](http://docs.mergado.apiary.io/#reference/core/tasks).
- API endpoints for various [logs and actions](http://docs.mergado.apiary.io/#reference/core/logs).
- Support `filter_by` query string parameter in [statistics](http://docs.mergado.apiary.io/#reference/statistics/products/statistics-of-all-products).
- Allow POST for requesting [products' statistics](http://docs.mergado.apiary.io/#reference/statistics/products/statistics-of-all-products-using-post).
- Added more information (about connection with shopping services) to the _[eshop info](http://docs.mergado.apiary.io/#reference/core/eshops/show-eshop-info)_ endpoint.
- Added endpoint for listing [user's notifications](http://docs.mergado.apiary.io/#reference/core/notifications/get-users-notifications).

### Fixed
- Parameter `fields` in API of statistics.
- Support the creation of the rule type `hiding` (hiding of products).

## Mergado Apps 0.2.1
- 2016-05-18

### Added
- API endpoints for [notifications](http://docs.mergado.apiary.io/#reference/core/notifications).
- API endpoints for [XML feed audits](http://docs.mergado.apiary.io/#reference/feed-audits).
- API endpoint for [querying products](http://docs.mergado.apiary.io/#reference/core/products/query-products).

### Changed
- The field `data` in product collections was returning input data. Now it returns the output data and the input data are listed in a new field `input_data`.
- Mergado App IFRAME API (*Maia*) now has two new methods: `startDownload` and `openWindow`. Also a bug was fixed when calling `tellHeight` method repeatedly.

## Mergado Apps 0.2.0
- 2016-05-04

### Added
- API endpoints for [statistics](http://docs.mergado.apiary.io/#reference/statistics).
- API endpoints for [product management](http://docs.mergado.apiary.io/#reference/core/products).
- API endpoint for [Google Analytics](http://docs.mergado.apiary.io/#reference/google).

### Fixed
- Creating or updating a rule did not update indicator of "change" in project, i.e. when rules were processed in a project, they were all skipped and the rule was not applied at all.

## Mergado Apps 0.1.2
- 2016-04-21

### Added
- API endpoint `GET /shops/<id>/info/`.
- API endpoint `GET /projects/<id>/info/`.
- Implemented a new communication protocol for [rule definitions]({{ site.baseurl }}/apps/defining-new-rules.html) by applications.
- New fields `is_movable`, `is_editable` and `is_pausable` were added to the rule collection.

### Changed
- When creating new rules by `POST /projects/<id>/rules/`, it is now possible to include the field `queries` which assigns queries to the rule in one request. If the field is not included, the query returning all products is automatically assigned.
- The field `deletable` in the rule collection was renamed to `is_deletable`.

### Fixed
- Server error when creating new `bidding` rule with empty `data` field (issue [#12](https://github.com/mergado/mergado-apps/issues/12)).
- Server error when creating query that already exists (Issue [#11](https://github.com/mergado/mergado-apps/issues/11)).

## Mergado Apps 0.1.1
- 2016-04-06

### Added
- New API endpoints `PATCH /rules/<id>/queries/` and `DELETE /rules/<id>/queries/<id>/` let you assign and retract queries from rules.

### Fixed
- Correctly update a rule when `PATCH /rules/<id>/` with `data` field is issued.
- When creating or updating a rule or a variable, the API returns 400 Bad Request if the associated element does not exist.

## Mergado Apps 0.1.0
- 2016-03-23

### Added
- Mergado API ([app.mergado.com/api](https://app.mergado.com/api)).
- API documentation ([docs.mergado.apiary.io](http://docs.mergado.apiary.io/)).
