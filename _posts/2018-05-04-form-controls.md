---
layout: page
title: "Form controls"
category: design
date: 2018-05-04 14:33:25
active_item: ""
order: 31

backgrounds:
  -
  - invert
types:
  - checkbox
  - radio
---

## Basic text input

<div class="vertical-form">
	<div class="input-group">
		<label for="text-input">Text input</label>
		<input id="text-input" type="text" value="text input value" />
	</div>
	<div class="input-group">
		<label for="text-input-readonly">Readonly text input</label>
		<input id="text-input-readonly" type="text" readonly value="text input value" />
	</div>
	<div class="input-group">
		<label for="text-input-disabled">Disabled text input</label>
		<input id="text-input-disabled" type="text" disabled value="text input value" />
	</div>
	<div class="input-group">
		<label for="text-input">Text input with placeholder</label>
		<input id="text-input" type="text" placeholder="text input placeholder" />
	</div>
	<div class="input-group">
		<label for="text-input-readonly">Readonly text input with placeholder</label>
		<input id="text-input-readonly" type="text" readonly placeholder="text input placeholder" />
	</div>
	<div class="input-group">
		<label for="text-input-disabled">Disabled text input with placeholder</label>
		<input id="text-input-disabled" type="text" disabled placeholder="text input placeholder" />
	</div>
</div>
```html
<div class="input-group">
	<label for="text-input">Text input</label>
	<input id="text-input" type="text" value="text input value" />
</div>
<div class="input-group">
	<label for="text-input-readonly">Readonly text input</label>
	<input id="text-input-readonly" type="text" readonly value="text input value" />
</div>
<div class="input-group">
	<label for="text-input-disabled">Disabled text input</label>
	<input id="text-input-disabled" type="text" disabled value="text input value" />
</div>
<div class="input-group">
	<label for="text-input">Text input with placeholder</label>
	<input id="text-input" type="text" placeholder="text input placeholder" />
</div>
<div class="input-group">
	<label for="text-input-readonly">Readonly text input with placeholder</label>
	<input id="text-input-readonly" type="text" readonly placeholder="text input placeholder" />
</div>
<div class="input-group">
	<label for="text-input-disabled">Disabled text input with placeholder</label>
	<input id="text-input-disabled" type="text" disabled placeholder="text input placeholder" />
</div>
```

### Clearable input

Basic text input with 'X' to clear it's content. Useful for simple filters and such.
It uses some JavaScript code, that is part of MUIL. Just add 'clearable' class and it will work.

<div class="vertical-form">
	<div class="input-group">
		<label for="clearable-text-input">Text input</label>
		<input id="clearable-text-input" class="clearable" type="text" value="x" placeholder="Start typing"/>
	</div>
</div>

```html
<div class="input-group">
	<label for="clearable-text-input">Text input</label>
	<input id="clearable-text-input" class="clearable" type="text" placeholder="Start typing"/>
</div>
```

### Prefix / suffix

Text inputs can have prefix and / or suffix. And you can have multiple of both.
Prefix/suffix can be text, link or icon.

<div class="vertical-form">
	<div class="input-group">
		<label for="input-pref-1">Input label</label>
		<div class="input-prefix-wrapper">
			<div class="input-prefix">
				Prefix
			</div>
			<input id="input-pref-1" type="text" value="input value" />
		</div>
	</div>
	<div class="input-group">
		<label for="input-pref-2">Input label</label>
		<div class="input-prefix-wrapper">
			<div class="input-prefix">
				Prefix
			</div>
			<div class="input-prefix">
				<b>Prefix 2</b>
			</div>
			<input id="input-pref-2" type="text" value="input value" />
		</div>
	</div>
	<div class="input-group">
		<label for="input-suf-1">Input label</label>
		<div class="input-suffix-wrapper">
			<input id="input-suf-1" type="text" value="input value" />
			<div class="input-suffix">
				Suffix
			</div>
		</div>
	</div>
	<div class="input-group">
		<label for="input-suf-2">Input label</label>
		<div class="input-suffix-wrapper">
			<input id="input-suf-2" type="text" value="input value" />
			<div class="input-suffix">
				Suffix
			</div>
			<div class="input-suffix">
				<b>Suffix 2</b>
			</div>
		</div>
	</div>
	<div class="input-group">
		<label for="input-comb">Input label</label>
		<div class="input-prefix-wrapper input-suffix-wrapper">
			<div class="input-prefix">
				<b>http://</b>
			</div>
			<input id="input-comb" type="text" value="input value" />
			<div class="input-suffix">
				<a class="icon">
					<svg class="icon icon-download" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/assets/style-guide/icons.svg#download"></use></svg>
				</a>
			</div>
		</div>
	</div>
</div>

```html
<div class="input-group">
	<label for="input-pref-1">Input label</label>
	<div class="input-prefix-wrapper">
		<div class="input-prefix">
			Prefix
		</div>
		<input id="input-pref-1" type="text" value="input value" />
	</div>
</div>
<div class="input-group">
	<label for="input-pref-2">Input label</label>
	<div class="input-prefix-wrapper">
		<div class="input-prefix">
			Prefix
		</div>
		<div class="input-prefix">
			<b>Prefix 2</b>
		</div>
		<input id="input-pref-2" type="text" value="input value" />
	</div>
</div>
<div class="input-group">
	<label for="input-suf-1">Input label</label>
	<div class="input-suffix-wrapper">
		<input id="input-suf-1" type="text" value="input value" />
		<div class="input-suffix">
			Suffix
		</div>
	</div>
</div>
<div class="input-group">
	<label for="input-suf-2">Input label</label>
	<div class="input-suffix-wrapper">
		<input id="input-suf-2" type="text" value="input value" />
		<div class="input-suffix">
			Suffix
		</div>
		<div class="input-suffix">
			<b>Suffix 2</b>
		</div>
	</div>
</div>
<div class="input-group">
	<label for="input-comb">Input label</label>
	<div class="input-prefix-wrapper input-suffix-wrapper">
		<div class="input-prefix">
			<b>http://</b>
		</div>
		<input id="input-comb" type="text" value="input value" />
		<div class="input-suffix">
			<a class="icon">
				<svg class="icon icon-download" aria-hidden="true"><use xlink:href="{{ site.baseurl }}/assets/style-guide/icons.svg#download"></use></svg>
			</a>
		</div>
	</div>
</div>
```

## Textarea

Basically same thing as text input.

<div class="vertical-form">
	<div class="input-group">
		<label for="textarea">Text input</label>
		<textarea id="textarea">text input value</textarea>
	</div>
	<div class="input-group">
		<label for="textarea-readonly">Readonly text input</label>
		<textarea id="textarea-readonly" readonly>text input value</textarea>
	</div>
	<div class="input-group">
		<label for="textarea-disabled">Disabled text input</label>
		<textarea id="textarea-disabled" disabled>text input value</textarea>
	</div>
	<div class="input-group">
		<label for="textarea">Text input with placeholder</label>
		<textarea id="textarea" placeholder="text input placeholder"></textarea>
	</div>
	<div class="input-group">
		<label for="textarea-readonly">Readonly text input with placeholder</label>
		<textarea id="textarea-readonly" readonly placeholder="text input placeholder"></textarea>
	</div>
	<div class="input-group">
		<label for="textarea-disabled">Disabled text input with placeholder</label>
		<textarea id="textarea-disabled" disabled placeholder="text input placeholder"></textarea>
	</div>
</div>
```html
<div class="input-group">
	<label for="textarea">Text input</label>
	<textarea id="textarea">text input value</textarea>
</div>
<div class="input-group">
	<label for="textarea-readonly">Readonly text input</label>
	<textarea id="textarea-readonly" readonly>text input value</textarea>
</div>
<div class="input-group">
	<label for="textarea-disabled">Disabled text input</label>
	<textarea id="textarea-disabled" disabled>text input value</textarea>
</div>
<div class="input-group">
	<label for="textarea">Text input with placeholder</label>
	<textarea id="textarea" placeholder="text input placeholder"></textarea>
</div>
<div class="input-group">
	<label for="textarea-readonly">Readonly text input with placeholder</label>
	<textarea id="textarea-readonly" readonly placeholder="text input placeholder"></textarea>
</div>
<div class="input-group">
	<label for="textarea-disabled">Disabled text input with placeholder</label>
	<textarea id="textarea-disabled" disabled placeholder="text input placeholder"></textarea>
</div>
```
## Select box

In Mergado main app we use modifed **react-select-plus**, which is fork of [React Select by Jed Watson](https://jedwatson.github.io/react-select/).
You are welcome to use it too, we have even bundled our styles for it in MUIL CSS.

You can ofcourse use any other "nice" select box component/plugin there is, or just plain native select box, which would look like this:

<div class="vertical-form">
	<div class="input-group">
		<label for="select">Select box</label>
		<select id="select">
			<option>Value 1</option>
			<option>Value 2</option>
			<option>Value 3</option>
		</select>
	</div>
	<div class="input-group">
		<label for="select-readonly">Readonly select box</label>
		<select id="select-readonly" readonly>
			<option>Value 1</option>
			<option>Value 2</option>
			<option>Value 3</option>
		</select>
	</div>
	<div class="input-group">
		<label for="select-disabled">Disabled select box</label>
		<select id="select-disabled" disabled>
			<option>Value 1</option>
			<option>Value 2</option>
			<option>Value 3</option>
		</select>
	</div>
</div>

```html
<div class="input-group">
	<label for="select">Select box</label>
	<select id="select">
		<option>Value 1</option>
		<option>Value 2</option>
		<option>Value 3</option>
	</select>
</div>
<div class="input-group">
	<label for="select-readonly">Readonly select box</label>
	<select id="select-readonly" readonly>
		<option>Value 1</option>
		<option>Value 2</option>
		<option>Value 3</option>
	</select>
</div>
<div class="input-group">
	<label for="select-disabled">Disabled select box</label>
	<select id="select-disabled" disabled>
		<option>Value 1</option>
		<option>Value 2</option>
		<option>Value 3</option>
	</select>
</div>
```

## File upload

There is some JavaScript code as part of MUIL, that makes this input stylable & behave correctly.

<div class="vertical-form">
	<div class="input-group">
		<label for="file-upload">Store's avatar:</label>
		<input id="file-upload" type="file" />
		<p class="input-note">
			Optional information about supported file format or some other general input note.
		</p>
	</div>
</div>

```html
<div class="input-group">
	<label for="file-upload">Store's avatar:</label>
	<div class="file-upload-control">
		<div class="control-wrapper">
			<div class="button">
				Select file
				<input id="file-upload" type="file" class="upload-input" />
			</div>
			<div class="filename">No file selected</div>
		</div>
		<p class="input-note">
			Optional information about supported file format or some other general input note.
		</p>
	</div>
</div>
```

## Checkbox & Radio button

For these we have custom style and we had to use JavaScript to make it happen.
Unfortunately CSS only approaches were not good enough for us, as they required special HTML structure, which we were unable to meet.
But don't worry, this JS code is part of MUIL, so it should be just plug 'n play.
Multiple inputs should be wrapped inside `.input-list`.

<div class="vertical-form">
	<div class="input-group input-list">
		<label>
			<input type="checkbox" /> Standard checkbox
		</label>
	</div>
	<div class="input-group input-list">
		<label>
			<input type="checkbox" class="negative" checked /> Danger / negative checkbox
		</label>
	</div>
	<div class="input-group input-list">
		<label>
			<input type="checkbox" /> Checkbox list 1
		</label>
		<label>
			<input type="checkbox" /> Checkbox list 2
		</label>
		<label>
			<input type="checkbox" /> Checkbox list 3
		</label>
	</div>
	<div class="input-group input-list">
		<label>
			<input type="radio" name="foo" value="1" /> Radio button 1
		</label>
		<label>
			<input type="radio" name="foo" value="2" /> Radio button 2
		</label>
		<label>
			<input type="radio" name="foo" value="3" /> Radio button 3
		</label>
	</div>
</div>

```html
<div class="input-group input-list">
	<label>
		<input type="checkbox" /> Standard checkbox
	</label>
</div>
<div class="input-group input-list">
	<label>
		<input type="checkbox" class="negative" checked /> Danger / negative checkbox
	</label>
</div>
<div class="input-group input-list">
	<label>
		<input type="checkbox" /> Checkbox list 1
	</label>
	<label>
		<input type="checkbox" /> Checkbox list 2
	</label>
	<label>
		<input type="checkbox" /> Checkbox list 3
	</label>
</div>
<div class="input-group input-list">
	<label>
		<input type="radio" name="foo" value="1" /> Radio button 1
	</label>
	<label>
		<input type="radio" name="foo" value="2" /> Radio button 2
	</label>
	<label>
		<input type="radio" name="foo" value="3" /> Radio button 3
	</label>
</div>
```
## Checkbox & Radio button - all possibilities

Add `invert` class to input if they're on dark background.

{% for background in page.backgrounds %}
<div class="white-block {{ background }}">
	<div class="tiles">
		{% for type in page.types %}
			<div class="tile half {{ type }}">
				<div class="input-group">
					<label>
						<input type="{{ type }}" class="{{ background }}"/>
						Standard off
					</label>
				</div>
				<div class="input-group">
					<label {% if type == 'radio' %}style="visibility: hidden;"{% endif %}>
						<input type="{{ type }}" class="{{ background }} indeterminate"/>
						Standard indeterminate
					</label>
				</div>
				<div class="input-group">
					<label>
						<input type="{{ type }}" class="{{ background }}" checked/>
						Standard on
					</label>
				</div>
				<div class="input-group">
					<label>
						<input type="{{ type }}" class="{{ background }} negative"/>
						Danger off
					</label>
				</div>
				<div class="input-group">
					<label {% if type == 'radio' %}style="visibility: hidden;"{% endif %}>
						<input type="{{ type }}" class="{{ background }} negative indeterminate"/>
						Danger indeterminate
					</label>
				</div>
				<div class="input-group">
					<label>
						<input type="{{ type }}" class="{{ background }} negative" checked/>
						Danger on
					</label>
				</div>
				<div class="input-group">
					<label>
						<input type="{{ type }}" class="{{ background }} negative" disabled/>
						Danger disabled off
					</label>
				</div>
				<div class="input-group">
					<label {% if type == 'radio' %}style="visibility: hidden;"{% endif %}>
						<input type="{{ type }}" class="{{ background }} negative indeterminate" disabled/>
						Danger disabled indeterminate
					</label>
				</div>
				<div class="input-group">
					<label>
						<input type="{{ type }}" class="{{ background }} negative" checked disabled/>
						Danger disabled on
					</label>
				</div>
				<div class="input-group">
					<label>
						<input type="{{ type }}" class="{{ background }}" disabled/>
						Disabled off
					</label>
				</div>
				<div class="input-group">
					<label {% if type == 'radio' %}style="visibility: hidden;"{% endif %}>
						<input type="{{ type }}" class="{{ background }} indeterminate" disabled/>
						Disabled indeterminate
					</label>
				</div>
				<div class="input-group">
					<label>
						<input type="{{ type }}" class="{{ background }}" checked disabled/>
						Disabled on
					</label>
				</div>
			</div>
		{% endfor %}
	</div>
</div>
{% endfor %}

<script>
	document.querySelectorAll('.indeterminate').forEach((input) => {
		input.indeterminate = true;
	});
</script>
