---
layout: page
title: "Navigation"
category: design
date: 2018-06-13 14:57:31
active_item: ""
order: 50
---

## Tabs Paginator

<nav class="tabs-navigation">
	<ul>
		<li>
			<a href="#">Tab 1</a>
		</li>
		<li>
			<a href="#" class="active">Active tab</a>
		</li>
		<li>
			<a href="#">Tab 3</a>
		</li>
		<li>
			<a href="#">Tab 4</a>
		</li>
	</ul>
</nav>

```html
<nav class="tabs-navigation">
	<ul>
		<li>
			<a href="#">Tab 1</a>
		</li>
		<li>
			<a href="#" class="active">Active tab</a>
		</li>
		<li>
			<a href="#">Tab 3</a>
		</li>
		<li>
			<a href="#">Tab 4</a>
		</li>
	</ul>
</nav>
```

## Paginator

<nav class="paginator">
	<a href="#" class="button disabled">
		<svg class="icon icon-arrow-left " aria-hidden="true"><use xlink:href="{{ site.baseurl }}/assets/style-guide/icons.svg#arrow-left"></use></svg>
		<span class="button-text">Předchozí</span>
	</a>
	<div class="pages">
		<a href="#" class="current">
			1
		</a>
		<a href="#">
			2
		</a>
		<a href="#">
			3
		</a>
		<span>…</span>
		<a href="#">
			25
		</a>
		<span>…</span>
		<a href="#">
			50
		</a>
		<a href="#">
			51
		</a>
	</div>
	<div class="pages-info">
		1 / 51
	</div>
	<a href="#" class="button">
		<span class="button-text">Následující</span>
		<svg class="icon icon-arrow-right " aria-hidden="true"><use xlink:href="{{ site.baseurl }}/assets/style-guide/icons.svg#arrow-right"></use></svg>
	</a>
</nav>

```html
<nav class="paginator">
	<a href="#" class="button disabled">
		<svg class="icon icon-arrow-left " aria-hidden="true"><use xlink:href="{{ site.baseurl }}/assets/style-guide/icons.svg#arrow-left"></use></svg>
		<span class="button-text">Předchozí</span>
	</a>
	<div class="pages">
		<a href="#" class="current">
			1
		</a>
		<a href="#">
			2
		</a>
		<a href="#">
			3
		</a>
		<span>…</span>
		<a href="#">
			25
		</a>
		<span>…</span>
		<a href="#">
			50
		</a>
		<a href="#">
			51
		</a>
	</div>
	<!-- visible on mobile -->
	<div class="pages-info">
		1 / 51
	</div>
	<a href="#" class="button">
		<span class="button-text">Následující</span>
		<svg class="icon icon-arrow-right " aria-hidden="true"><use xlink:href="{{ site.baseurl }}/assets/style-guide/icons.svg#arrow-right"></use></svg>
	</a>
</nav>
```
