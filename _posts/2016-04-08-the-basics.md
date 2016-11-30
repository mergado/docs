---
layout: page
title: "The Basics"
category: intro
date: 2016-04-08 12:44:47
active_item: ""
order: 1
---

Mergado Apps is a way to implement new functionality that can be used by users or agencies of Mergado. This functionality is created and maintained by third-party developers or companies, i.e. Mergado team does not take responsibility for broken applications.

## Before you start

If you have never used Mergado, you may be a bit confused. We recommend you to read about Margado on [the blog](http://www.mergado.com/blog) and even try to use Mergado for a while if possible (just try to create an export, rules and so on). Please, don't hesitate to [contact us](/docs/support/), we can help you with setting up some test data and also provide some useful tips.

## Terminology

Throughout the docs, we will often talk about projects, eshops, types of apps and use other terms you should be aware of.

### Projects, exports and eshops

Projects or exports are often interchangeable in our case. A project or export is created when a user imports a new XML feed in Mergado. However, before Mergado allows users to create a new project, it scans the whole XML feed and figures out a few things at first, mainly the name of the eshop for which the feed was generated. If the eshop doesn't exists in Mergado yet, it is created, otherwise the project is created under the existing eshop. So when we say _eshop_, we usually mean the eshop's representation in Mergado.

### Input and output data in projects

Each project is created when a new XML feed is imported in Mergado. We say that this XML feed contains _input_ data. Mergado users can modify their XML feed in Mergado. This modification is usually done via _rules_ and _queries_ (more about this later in its own chapter). When this modification is applied to the input data, we say that the results are _output_ data.

### App types

There are three types of apps. Each type has its specifics:

- _for exports_ (`project` type) -- the application is intended for exports and is also paid per export.
- _for eshops_ (`shop` type) -- the application is intended for eshops and is also paid for per eshop.
- _for users_ (`user` type) -- the application is intended for users and is also paid for per user.

For example the `user` type app can be something like a notebook where the user can write something only he or she would see. An app for exports could scan all products and report some statistics. Each type of app is also accessible from a different location in Mergado.

## Hosting apps

All applications are hosted on _Mergado App Cloud_. Each application has its own repository and a database. App Cloud also helps developers test and develop their applications, i.e. there is no need to install Apache and PHP on localhost. The development environment can be accessed with SFTP or SSH.

### Supported technologies

Currently, applications written on Mergado platform can be written only in **PHP** and only **MySQL** is supported for data storage. Other programming languages (e.g. Python) and databases (e.g. PostgreSQL, Redis) are planned in the future.

## Setting up a new app

Apps are registered in the [Developers Center](https://developers.mergado.com). The registration results in a new repository on our _App Cloud_. For more information on how to set up a new up go to the [Setting Up](setting-up.html) page.
