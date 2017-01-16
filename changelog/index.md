---
layout: page_toc
title: "Changelog"
active_item: "changelog"
---

# Roadmap

## February 2017

- Support for restricted Markdown (bold, italic and links) in body of notifications sent via the API.
- Scraping more data from [sluzby.heureka.cz](https://sluzby.heureka.cz), [sluzby.heureka.sk](https://sluzby.heureka.sk) and [admin.zbozi.cz](https://admin.zbozi.cz).
- Support for logging events in applications using [Sentry](https://github.com/getsentry).
- Redis cache for individual applications.

## 2017

- Improve application-defined rules API and their management in the Developer Center.
- Mergado UI CSS framework.
- New or extended sources of statistics, e.g. Sklik, AdWords, Zbozi.cz, Heureka, Glami.
- Reviews of apps by users.
- Improvements of the vendor profile, e.g. a banner, a logo, a developer's bio.
- New features on the Store homepage, e.g. filters, a search box, categories and labels, favorite apps, etc.

# Changelog

All notable changes to this project will be documented in this file.

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
