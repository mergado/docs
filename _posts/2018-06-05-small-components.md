---
layout: page
title: "Small components"
category: design
date: 2018-06-05 12:39:24
active_item: ""
order: 90
---

## System messages

<p class="message">
	Neutral message.
</p>
<p class="message success">
	Success message.
</p>
<p class="message error">
	Error message.
</p>

```html
<p class="message">
	Neutral message.
</p>
<p class="message success">
	Success message.
</p>
<p class="message error">
	Error message.
</p>
```

## Wizard progress

<ul class="wizard-progress">
	<li class="done">
		<svg class="icon icon-ok" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/assets/style-guide/icons.svg#ok"></use></svg>
		Step number one
	</li>
	<li class="done">
		<svg class="icon icon-ok" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/assets/style-guide/icons.svg#ok"></use></svg>
		Step number two
	</li>
	<li class="current">
		<i class="icon circle-number">3</i>
		Step number three
	</li>
	<li class="pending">
		<i class="icon circle-number">4</i>
		Step number four
	</li>
	<li class="pending">
		<i class="icon circle-number">5</i>
		Step number five
	</li>
</ul>

```html
<ul class="wizard-progress">
	<li class="done">
		<svg class="icon icon-ok" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/assets/style-guide/icons.svg#ok"></use></svg>
		Step number one
	</li>
	<li class="done">
		<svg class="icon icon-ok" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/assets/style-guide/icons.svg#ok"></use></svg>
		Step number two
	</li>
	<li class="current">
		<i class="icon circle-number">3</i>
		Step number three
	</li>
	<li class="pending">
		<i class="icon circle-number">4</i>
		Step number four
	</li>
	<li class="pending">
		<i class="icon circle-number">5</i>
		Step number five
	</li>
</ul>
```

## Letter filter

<div class="letter-filter">
	<a href="#" class="current">All</a>
	<a href="#">3</a>
	<a href="#">A</a>
	<a href="#">B</a>
	<a href="#">D</a>
	<a href="#">E</a>
</div>

```html
<div class="letter-filter">
	<a href="#" class="current">All</a>
	<a href="#">3</a>
	<a href="#">A</a>
	<a href="#">B</a>
	<a href="#">D</a>
	<a href="#">E</a>
</div>
```
