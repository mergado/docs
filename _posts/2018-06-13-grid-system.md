---
layout: page
title: "Grid system"
category: design
date: 2018-06-13 14:57:38
active_item: ""
order: 20
---

## Tiles

Grid consists of container `.tiles` and children `.tile`. Each child element should have specified size, available options are:

- `.half`
- `.third`
- `.two-thirds`
- `.quarter`
- `.three-quarters`.

Our grid is responsive by default, this means, that these sizes are for full size screen and are automatically scaled up as the display size gets smaller, eventually all of these will span entire width on very small device. We considered making it more explicit, but found out, that this system works for us. Width breakpoints are setup like this:

- small laptop: **< 1440px**
- tablet: **< 960px**
- mobile: **< 480**

One last think, try not to mess with container and/or children margins. It's probably better idea to use another element. You can add `inset` css class to `.tiles`, if you need some extra spacing around children.

### Examples

<div class="style-guide-tiles">
	<div class="tiles">
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
	</div>
	<div class="tiles">
		<div class="tile third">
			<div class="tile-content">
				1/3<br />
				<span class="css-class">.third</span>
			</div>
		</div>
		<div class="tile third">
			<div class="tile-content">
				1/3<br />
				<span class="css-class">.third</span>
			</div>
		</div>
		<div class="tile third">
			<div class="tile-content">
				1/3<br />
				<span class="css-class">.third</span>
			</div>
		</div>
	</div>
	<div class="tiles">
		<div class="tile two-thirds">
			<div class="tile-content">
				2/3<br />
				<span class="css-class">.two-thirds</span>
			</div>
		</div>
		<div class="tile third">
			<div class="tile-content">
				1/3<br />
				<span class="css-class">.third</span>
			</div>
		</div>
	</div>
	<div class="tiles">
		<div class="tile half">
			<div class="tile-content">
				1/2<br />
				<span class="css-class">.half</span>
			</div>
		</div>
		<div class="tile half">
			<div class="tile-content">
				1/2<br />
				<span class="css-class">.half</span>
			</div>
		</div>
	</div>
	<div class="tiles">
		<div class="tile half">
			<div class="tile-content">
				1/2<br />
				<span class="css-class">.half</span>
			</div>
		</div>
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
	</div>
	<div class="tiles">
		<div class="tile three-quarters">
			<div class="tile-content">
				3/4<br />
				<span class="css-class">.three-quarters</span>
			</div>
		</div>
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
	</div>
</div>

### Nesting

You can of course container inside child. Just be careful with child padding / border if you do.

<div class="style-guide-tiles">
	<div class="tiles">
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
	</div>
	<div class="tiles">
		<div class="tile half">
			<div class="tiles">
				<div class="tile half">
					<div class="tile-content">
						1/2<br />
						<span class="css-class">.half</span>
					</div>
				</div>
				<div class="tile half">
					<div class="tile-content">
						1/2<br />
						<span class="css-class">.half</span>
					</div>
				</div>
			</div>
		</div>
		<div class="tile half">
			<div class="tile-content">
				1/2<br />
				<span class="css-class">.half</span>
			</div>
		</div>
	</div>
</div>

## Dashboard tiles

Like regular tiles, but for use within `.white-block` elements. They negate white block padding and don't have any space between tiles. Oh and there is also line between tiles.

<div class="white-block style-guide-tiles">
	<div class="dashboard-tiles">
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
		<div class="tile quarter">
			<div class="tile-content">
				1/4<br />
				<span class="css-class">.quarter</span>
			</div>
		</div>
	</div>
</div>
