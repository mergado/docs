---
layout: page
title: "App's Lifecycle"
category: apps
date: 2016-06-23 09:20:53
active_item: ""
order: 5
---

Each app visible to the end user has, in fact, two separate versions (referred to as *stages*) behind the curtains:

1. **PRODUCTION** stage, which represents the current approved and publicly released version of the application that end users use.
2. **DEVELOPMENT** *(dev)* stage, which is the version visible **only** to the app's developers and **not** to end users. This is the stage you as a developer will be working with most of the time.

{: .info}
This is the reason why you, as a developer, see all your applications in Mergado Store as two items. One representing the *production stage* and the other one the *development stage*. This allows you to code and test your app separately from what end users see and use. The developer works with the development stage during your development process while the end users are using the separated production stage at the same time.

## Creating an app
When a vendor creates an app, both stages are created simultaneously, the production stage of the app starts is hidden in Mergado Store from the end users, as your app has not been *released* yet.

# Lifecycle of an app

In addition to two stages of an app co-existing, app also is in one of the five *(release)* states, each one representing where in the *release* process the app currently is. These states are:

1. Development
2. Submitted
3. Rejected
4. Approved
5. Released

The lifecycle consisting of both stages and all possible states can be visualized like this:

```
     .-------------.
.----| App created |
|    '-------------'
|
|   .----------------------------------------------------------------------.
|  ||                                                                      ||
|  ||  .--------------------------------------<---. Rejected               ||
|  ||  |                                          |                        ||
|  ||  +----------<---. Rejected                  |                        ||
|  ||  |              |                           |                        ||
|  ||  |  .-----------+-.      .-------------.    |                        ||
'------+--> Development |------>  Submitted  |----+                        ||
   ||     '-------------'      '-------------'    |                        ||
   ||                                             |    .-------------.     ||
   ||                                    Approved '---->   Release   |---------.
   ||   Development stage                              '-------------'     ||  |
   ||                                                                      ||  |
    '----------------------------------------------------------------------'   |
                                                                               |
                                                       .------------------.    |
                                                      ||                  ||   |
                                                      || Production stage <----'
                                                      ||                  ||
                                                       '------------------'
```

#### Development
When vendor creates an app, the app begins at the *development* state.

#### Submitted
When it is decided that the current development stage is something worth releasing to the public, the app is submitted to Mergado. The application is then examined by our staff, which ultimately decides that the app meets the quality standards for release to Mergado Store (or it does not).

#### Rejected
If your application does not meet the requirements of Mergado platform, your submission is rejected and your app goes back to the development state, giving the developer chance to fix any problems and issues that prevented the approval.

#### Approved
In this case the application successfully met the requirements of Mergado platform and the release process is now approved. Now it is **up to you** to run the release process; this way you can schedule the release based on your requirements, in case you need to perform any additional tasks (eg. database migration).

#### Released
Intermediate state representing the app's state immediately after the release process and right before going back to the development state.
