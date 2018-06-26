---
layout: page
title: "The Basics"
category: intro
date: 2016-04-08 12:44:47
active_item: ""
order: 1
---

Even though Mergado was originally developed as a closed system, throughout the years it became apparent that a possibility of extending our core features with external, third-party logic *(which we might've never thought of)*, could be quite a useful thing to do. Hence, our Mergado platform gives you - as a third party - a way of adding new functionality to Mergado, which can be used by its users.

## Before you start

If you have never used Mergado, you may be a bit confused. We recommend you to read about Margado on [the blog](http://www.mergado.com/blog) and even try to use Mergado for a while if possible *(just try to create an export, add a few rules to it, etc.)*. Please, don't hesitate to [contact us](/docs/support/), if you need help. We can help you with setting up some test data and also provide some useful tips.

## Terminology

In the docs, we talk about names and concepts like projects, eshops, types of apps and other terms. Before you start reading all these stuff, you should understand our terminology.

### Projects, exports and eshops

Projects or exports are often interchangeable in our case. A project or export is created after a user imports a new XML feed in Mergado. Before Mergado allows users to create a new project, it scans the whole XML feed and figures out a few things, mainly the name of the eshop for what this feed was generated. If the eshop doesn't exists in Mergado yet, it is created, otherwise the project is created and added under the existing eshop. So when we say _eshop_, we usually mean the eshop's representation in Mergado.

### Input and output data in projects

Each project is created when a new XML feed is imported in Mergado. We say that this XML feed contains _input_ data and we may also sometimes use the phrase _"input feed"_. Mergado users can modify their XML feed in Mergado. This modification is usually done with _rules_ and _queries_ (more about this later in its own chapter). When this modification is applied to the input data, we say that the result is an _output feed_ which contains output data.

### App types

There are three types of apps. Each type has its specifics:

- _for exports_ (`project` type) -- the application is intended for exports and is also paid per export.
- _for eshops_ (`shop` type) -- the application is intended for eshops and is also paid for per eshop.
- _for users_ (`user` type) -- the application is intended for users and is also paid for per user.

For example the `user` type app can be something like a notebook where a user can write something only he or she can see. On the other hand, an app for exports could scan all products and report some statistics. Another differenc is that each type of app is accessible from a different location in Mergado.

## Hosting apps

All applications are hosted on _App Cloud_. Each application has its own repository and a database. App Cloud also helps developers test and develop their applications, i.e. there is no need to install Apache and PHP on localhost. The development environment can be accessed with SFTP or SSH.

### Supported technologies

Currently, applications running on Mergado platform can be written only in **PHP**, and only **MySQL** and **Redis** is supported for data storage. Other programming languages (e.g. Python) and databases (e.g. PostgreSQL) are planned in the future.

Additionally, developers are allowed to set up Cron for job-scheduling (`crontab` command). We also host our own pre-installed Sentry instance for logging events which can be used freely by developers. Sentry is available at [https://sentry-appcloud.mergado.com](https://sentry-appcloud.mergado.com/).

## Setting up a new app

Apps are registered in the [Developers Center](https://developers.mergado.com). The registration results in a new repository on our _App Cloud_. For more information on how to set up a new app go to the [Setting Up](setting-up.html) page.
