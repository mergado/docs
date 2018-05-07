---
layout: page
title: "Typography"
category: design
date: 2018-06-13 14:57:45
active_item: ""
order: 5
---

## Fonts

We use **14px** **Roboto** with **400** weight as default font. Bold variant uses font weight of **500**.
For monospace font, we use **Roboto Mono**, with same settings as default font.

Here is link to Google Fonts.

```html
<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500|Roboto:400,400i,500,500i&amp;subset=latin-ext" rel="stylesheet">
```

## Spacing, alignment

Heading elements (h1-h6) have some margin set by default. Unless they're `first:child`, in which case top margin is 0. Or inside `header` tag, in that case all margins are set to 0.

More extensive text content should be wrapped inside `.text-content` or `.text-block` element. Only difference between these is, that `.text-block` has some extra vertical margin, otherwise they're affect their children in the same way. Which is:
- Spacing between elements - paragraphs, lists, ...
- Styled paragraphs `p` - more readable line-height & text-align: justify. The latter you can override by setting class of `p` to `left`, `center` or `right`.

I would include some examples, but this docs has exactly same CSS rules applied to it, so it's not really necessary.
