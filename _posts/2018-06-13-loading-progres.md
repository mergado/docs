---
layout: page
title: "Loading / Progres"
category: design
date: 2018-06-13 14:57:23
active_item: ""
order: 55
---

## Loading block

<div class="loading-block">
	<svg class="icon icon-loading " aria-hidden="true"><use xlink:href="{{ site.baseurl }}/assets/style-guide/icons.svg#loading"></use></svg>
	<p>
		Please wait...
	</p>
</div>

```html
<div class="loading-block">
	<svg class="icon icon-loading " aria-hidden="true"><use xlink:href="{{ site.baseurl }}/assets/style-guide/icons.svg#loading"></use></svg>
	<p>
		Please wait...
	</p>
</div>
```

## Progress bar

<div class="white-block">
	<h3>
		Static
	</h3>
	<div class="tiles">
		<div class="tile quarter">
			<div class="progress-bar">
				<div class="progress-bar-inside" style="width: 0%;"></div>
			</div>
		</div>
		<div class="tile quarter">
			<div class="progress-bar">
				<div class="progress-bar-inside" style="width: 25%;"></div>
			</div>
		</div>
		<div class="tile quarter">
			<div class="progress-bar">
				<div class="progress-bar-inside" style="width: 75%;"></div>
			</div>
		</div>
		<div class="tile quarter">
			<div class="progress-bar">
				<div class="progress-bar-inside" style="width: 100%;"></div>
			</div>
		</div>
	</div>
	<h3>
		Animated
	</h3>
	<div class="tiles">
		<div class="tile quarter">
			<div class="progress-bar progress-loop">
				<div class="progress-bar-inside" style="width: 0%;"></div>
			</div>
		</div>
		<div class="tile quarter">
			<div class="progress-bar progress-loop">
				<div class="progress-bar-inside" style="width: 25%;"></div>
			</div>
		</div>
		<div class="tile quarter">
			<div class="progress-bar progress-loop">
				<div class="progress-bar-inside" style="width: 75%;"></div>
			</div>
		</div>
		<div class="tile quarter">
			<div class="progress-bar progress-loop">
				<div class="progress-bar-inside" style="width: 100%;"></div>
			</div>
		</div>
	</div>
</div>

```html
<-- Static -->
<div class="progress-bar">
	<div class="progress-bar-inside" style="width: 0%;"></div>
</div>
<div class="progress-bar">
	<div class="progress-bar-inside" style="width: 25%;"></div>
</div>
<div class="progress-bar">
	<div class="progress-bar-inside" style="width: 75%;"></div>
</div>
<div class="progress-bar">
	<div class="progress-bar-inside" style="width: 100%;"></div>
</div>
<-- Animated -->
<div class="progress-bar progress-loop">
	<div class="progress-bar-inside" style="width: 0%;"></div>
</div>
<div class="progress-bar progress-loop">
	<div class="progress-bar-inside" style="width: 25%;"></div>
</div>
<div class="progress-bar progress-loop">
	<div class="progress-bar-inside" style="width: 75%;"></div>
</div>
<div class="progress-bar progress-loop">
	<div class="progress-bar-inside" style="width: 100%;"></div>
</div>
```
