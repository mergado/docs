---
layout: page
title: "Setting Up"
category: intro
date: 2016-06-22 16:21:44
active_item: ""
order: 2
---

All apps are registered in the [Developers Center](https://developers.mergado.com). If you don't have an account in Mergado, you will be redirected to [Accounts](https://accounts.mergado.com) where you can create one. A new account is free – don't be discouraged if you need to select a billing period, no payment will be required, i.e. the option is for users who decide to use Mergado for product data management in their eshop.

In the Developers Center, you must confirm that you want to develop new applications for Mergado. After you have done that you should be able to register new apps by clicking on a button with a plus sign (+).

## Registering a new app

Before you register a new app, you need to come up with a name and other information:

* ``name`` – name of the app
* ``type`` – type of the app, this can be somewhat hard to understand if you have never used Mergado before. There are three types:
    - _for exports_ – the application is intended for exports (or projects, we use this terms interchangeably) and is also paid per export.
    - _for eshops_ – the application is intended for eshops and is also paid for per eshop.
    - _for users_ – the application is intended for users and is also paid for per user.
* ``color`` – a color of the app, it helps users with faster navigation, they will see the color in widgets and also in the apps' navigation bar
* ``trial period``
* ``oauth2 scopes`` – list of oauth2 scopes which the app is authorized to use
* ``countries`` – in which countries the app is available

{: .warning}
The ``name`` and ``type`` cannot be changed later, other information can so you do not have to decide later in the development process.

## DB, SSH and OAuth2 credentials

As soon as you finished the registration of a new app, MySQL, SSH and OAuth2 credentials are generated for the app. This credentials are also accessible on the app's overview page.

### Connecting to the DB

You can connect to the DB via [Adminer](https://appcloud.mergado.com/adminer/) which runs on our own server.

### Accessing app's repository

On Linux and Mac, a repository can be accessed via SSH by running the following command from terminal:

```bash
$ ssh <username>@appcloud.mergado.com
```

If you are running Windows, you can install [PuTTY](http://www.putty.org/) or any other SSH client for Windows.

For regular development, you will probably want to access the repository via SFTP:

```bash
$ sftp <username>@appcloud.mergado.com
```

You can, of course, use a graphical SFTP client. There is a variety of clients for Linux and Mac, which one you want to use is up to you. On Windows, very popular GUI client is [WinSCP](https://winscp.net/eng/index.php) or [Total Commander](http://www.ghisler.com/) with an [extension for SFTP support](http://www.ghisler.com/plugins.htm).
