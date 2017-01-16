---
layout: page
title: "Notifications"
category: apps
date: 2017-01-12 15:41:10
active_item: ""
order: 6
---

Notifications in Mergado can be used to notify user about events that need user's attention. Notifications consists of notification _title_ and _body_. [Mergado Flavored Markdown]({{ site.baseurl }}/developers/markdown.html) can be used in notifications body.

## Channels
There are two ways to notify a user. These ways are called channels.

- email -- Notification is sent to the user's email.
- frontend -- Notification is shown in the Mergado's notification panel.

Default channel is _frontend_.

## Priorities
Priority of notification determines the importance of notification. Users can configure what notification and how often they want to receive each notification with given priority.

- low
- medium
- high

Default priority is _medium_.

## Scopes
Scopes define who will receive the notification.

- shop -- Notification is sent to all users who can access the eshop.
- owner -- Notification is sent only to the owner of the eshop.
- user --  Notification is sent to single user.

Default scope is _shop_.
