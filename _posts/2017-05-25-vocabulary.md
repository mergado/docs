---
layout: page
title: "Vocabulary"
category: intro
date: 2017-05-25 14:37:10
active_item: ""
order: 3
---

English                           | Czech                                | Description
--------------------------------- | ------------------------------------ | -----------
shopping service                  | srovnávač zboží, zbožák              | A search engine that shoppers use to filter and compare products based on price, features, reviews and other criteria. For example, Heureka.cz, Zboží, Google Merchant are shopping services.
product, item                     | produkt, položka zboží               | Goods offered by e-shops.
product feed, data feed, XML feed | (XML) soubor obsahující produkty     | A file (usually XML) containing products' data.
export, project                   | export, projekt                      | An export or a project is created when users upload new data feed in Mergado along with some configuration how it should be processed.
e-shop                            | e-shop                               | In Mergado, new exports are automatically assigned to an e-shop. Each e-shop may contain several exports.
import, synchronization           | import, synchronizace                | The process of loading products from a data feed into Mergado's database.
application (of rules)            | aplikace (pravidel)                  | The process of applying users' changes on products to an export.
export (of products)              | export (produktů)                    | The process where products are transfered from Mergado's internal database back into an XML feed. 
input feed, input file            | vstupní feed, vstupní soubor         | The feed Mergado downloads and imports into its database.
output feed, output file          | výstupní feed, výstupní soubor       | The feed which is created when Mergado exports products from its database in a file.
owner                             | vlastník                             | Owner of an e-shop in Mergado is the user who created an e-shop by importing its first XML feed.
reader                            | uživatel s právy pro čtení           | A user who can access e-shop and its exports in Mergado.
writer                            | uživatel s právy pro zápis           | A user who can change how Mergado manipulates products of exports of an e-shop.
selection, query                  | výběr                                | Selections or queries enable users to select only a subset of products in an export.
rule                              | pravidlo                             | Rules make it possible to manipulate products. For example, a rule could adjust description of products by removing unwanted characters. Rules are usually used along with selections.
element                           | element                              | Element represents the name of an attribut of a product. For example, such an attribut can be product's name, color or price.
variable                          | proměnná                             | Variables are created from elements and can be used in rules as placeholders.
pairing elements                  | párovací elementy                    | Pairing elements are the sets of elements uniquelly identifying each product in an XML feed.
regular expression, regexp, regex | regulární výraz                      | A sequence of characters that define a search pattern. In Mergado, this pattern can be used in selections or variables to search for or extract specific information in or from an element's value.
audit, XML audit                  | audit XML feedu                      | A tool in Mergado which can be used to validate an XML feed. Result of an audit is a list of issues of various seriousness. There are three levels: error, warning and recommendation.
validator                         | validátor                            | Validators are used in audits to inspect products' elements and values.
issue                             | nález                                | An issues is a failed test of a validator in an audit.
error                             | chyba                                | Audited feed contains serious issues which may prevent shopping services from correct import of the feed.
warning                           | varování                             | Audited feed contains suspicious issues.
recommendation                    | doporučení                           | Only recommendations to consider further improovements of the XML feed.
notification                      | oznámení, upomínka, notifikace       | Mergado uses notifications to inform users about critical errors in their exports, changes in their tariff and so on. Notifications can be sent via an e-mail or may pop up in Mergado.
application, app                  | aplikace                             | Apps are programs created by external developers which add new features to Mergado in the form of extensions.
production stage (of app)         | produkční instalace aplikace         | Version (or revision) of an app which is available to all users in Mergado.
development stage (of app)        | aplikace ve fázi vývoje              | Version (or revision) of an app which is available only to its developers.
format                            | formát                               | Feeds are usually XML files created according to chosen XML specifications. Feed's specification is called a format. 
input format                      | vstupní formát                       | The format of the feed imported into Mergado.
output format                     | výstupní formát                      | The format of the feed exported from Mergado.
input data                        | vstupní data                         | Data of products imported into Mergado which were not yet processed by any rules.
output data                       | výstupní data                        | Data of products exported from Mergado whcih were already modified by rules.
converter                         | převodník                            | Converters are special rules which convert feeds between various formats.
universal product                 | univerzální produkt                  | Mergado's internal representation of a product in a universal format which helps to convert products between two formats.
input converter                   | převodník na vstupu                  | Converts each product in the input feed into a universal product.
output converter                  | převodník na výstupu                 | Converts each universal product to a format according the output feed.
billing                           | účtování                             | Information needed to construct an invoice.
authentication                    | autentizace                          | The act of confirming an identity of a user.
authorization                     | autorizace                           | The act of defining access policy to a user.
locale                            | jazyk, oblast                        | Defines the user's language, region and so on.
internationalization, i18n        | internacionalizace                   | The process of designing a software application so that it can potentially be adapted to various languages and regions.
localization, l10n                | lokalizace                           | The process of adapting internationalized software for a specific region or language by adding locale-specific components and translating text.
dimension                         | dimenze                              | This terminology was adopted from [Google](https://support.google.com/analytics/answer/1033861?hl=en). _"Dimensions are attributes of your data. For example, the dimension City indicates the city, for example, "Paris" or "New York", from which a session originates. The dimension Page indicates the URL of a page that is viewed."_
metric                            | metrika                              | Adopted from [Google](https://support.google.com/analytics/answer/1033861?hl=en). _"Metrics are quantitative measurements. The metric Sessions is the total number of sessions. The metric Pages/Session is the average number of pages viewed per session."_
release                           | nasazení                             | Make new features or bug fixes in a program or an application available for users.
frontend                          | frontend                             | A part of a program or an application closer to the user, that is the user interface and various server-side code like PHP and JavaScript.
backend                           | backend                              | A part of a program or an application farther away from the user, that is the database and various server-side code like Python.
process                           | proces                               | An instance of a computer program that is being executed.
task                              | úkol běžící na pozadí                | A task running in Mergado's background (backend). For example, import or application of rules are tasks which run in the background (so that users can still intearact with the frontend).
worker                            | worker                               | A process which executes tasks.

## Technologies

Name                  | Description
--------------------- | -----------
Mergado Apps          | A platform for developers who want to create features for Mergado in form of extensions.
App Cloud             | Server where all applications built on Mergado Apps run.
Developers (Center)   | A place where developers can register and manage new apps.
Accounts              | Website where users register and manage their account.
(Mergado) Store       | A place for users to buy new apps for Mergado.
(Mergado) Keychain    | A core app where users manage connections with other services like Heureka, Google Analytics and so on.
Markdown              | Simple markup language easily readable by people as well as computer.
OAuth2                | Authorization protocol.
Apiary                | A platform that provides tools for the design, development, and documentation of APIs.
Sentry                | Open source web service for error tracking.
MQL                   | Mergado Query Language. A declarative language developed specifically for selections in Mergado.
