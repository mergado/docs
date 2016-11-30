---
layout: page
title: "Mergado Flavored Markdown"
category: developers
date: 2016-11-30 16:21
active_item: ""
order: 1
---

*Mergado Flavored Markdown* is an extension of [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/) that will enable you to easily add your app's screenshots (or other images) and videos.
This can be used by you to give *that extra touch* to your app's description or help.

## Images

```
{images=http://image.url/1}
{images=http://image.url/1,http://image.url/2,http://image.url/3, ...}
```

This macro, where you put a list of image URLs separated by a comma (`,`) will create a list of images with that will be capable of being displayed in a lightbox.

## YouTube videos

```
{youtube=DLzxrzFCyOs}
```

This macro will embed an `<iframe>` with this video: [https://www.youtube.com/watch?v=DLzxrzFCyOs](https://www.youtube.com/watch?v=DLzxrzFCyOs).
