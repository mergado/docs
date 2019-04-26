---
layout: page
title: "IFRAME API (MAIA)"
category: apps
date: 2016-05-24 14:39:00
active_item: ""
order: 4
---

The primary way of displaying the application's content inside Mergado pages is through the use of `IFRAME` elements. Furthermore, these `IFRAMEs` are [sandboxed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox) to eliminate security risks that may arise from using potentially untrusted content inside `IFRAMEs` that are placed in the middle of Mergado's own pages. Since sandboxed `IFRAMEs` cannot speak directly with the rest of the Mergado page and vice versa, some standard form of JavaScript communication between the app's viewport and the page around it must be defined.

Such standard form of communication is represented by the **Mergado App IFRAME API** *(MAIA)* provided by Mergado platform. It is through this *API* that app's viewport `IFRAME` and Mergado wrapper page can communicate with each other.

{: .info}
**Important:** Be advised that -- since it provides some essential information about the contents of viewport, without which Mergado cannot display the `IFRAME` properly -- the placement and usage of MAIA in all app's pages and viewports is mandatory. Applications that don't include MAIA (or any *equivalent* implementation) in their pages' source code will be deemed unsatisfactory.

## Installation

To use the MAIA in your app's viewports simply include the appropriate script file provided by Mergado into your page's HTML source. You can use either of these:

- The minified version (recommended):

  ```html
  <script src="https://app.mergado.com/static/js/apps/MessageApi.min.js" async></script>
  ```
- The non-minified one (more appropriate for debugging purposes or to see how it works):

  ```html
  <script src="https://app.mergado.com/static/js/apps/MessageApi.js" async></script>
  ```

## Usage

### What it does by itself

1. **When the `MessageAPI.js` script is loaded:**
After the script is executed, a new global `Mergado` variable containing a singleton object representing MAIA is instantly available inside the app's viewport.

2. **When the app's `IFRAME` is loaded:**
   - After its content is loaded (i.e. the `IFRAME`'s `onload` event is fired) Mergado wrapper page sends a *"hello message"* to the app's `IFRAME`, which is instanteously intercepted by MAIA residing inside of it. MAIA then sends the height of viewport's content back to Mergado wrapper page, which then can update `IFRAME`'s height appropriately and the whole content of app's viewport will be visible.
   - All elements having a `data-download="somefileurl"` attribute will have a `onclick` event handler attached. When fired, a message will be sent to the wrapper page which will in turn display up a popup window with URL set to `somefileurl`. This is to overcome the limitations of Firefox browser, which is otherwise in most cases unwilling to start a file download from inside of an `IFRAME`.

### What you can do with it

The `Mergado` object has a number of methods which can be used to better your application, improve its usability or overcome any limitations that are the result of strict handling of sandboxed `IFRAME`s by web browsers.
<table>
	<thead>
	<tr>
		<th>Method</th>
		<th>Parameters</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td rowspan="3">
			<pre class="highlight"><code>Mergado.startDownload(string url)</code></pre>
		</td>
		<td rowspan="3"><code class="highlighter-rouge">url</code>: Target URL to start download from</td>
		<td>A new mini window will be popped up having <em>target URL</em> as its location. The window will be closed
			after 10 seconds; until then the target server has time to make a proper response. In this case most
			probably in a form of a file download.
		</td>
	</tr>
	<tr>
		<th>Example</th>
	</tr>
	<tr>
		<td>
			<pre class="highlight"><code>Mergado.tellHeight([int heightInPixels])</code></pre>
		</td>
	</tr>
	<tr>
		<td rowspan="2">
			<pre class="highlight"><code>Mergado.openWindow(string url)</code></pre>
		</td>
		<td rowspan="2"><code class="highlighter-rouge">url</code>: Target page URL</td>
		<td>A new browser window will be opened having the <em>target URL</em> as its location. This window will NOT
			automatically close itself.
		</td>
	</tr>
	<tr>
		<td>
			<b>Example:</b>
			<pre class="highlight"><code>Mergado.openWindow('https://app.mergado.com/')</code></pre>
		</td>
	</tr>
	<tr>
		<td rowspan="2">
			<pre class="highlight"><code>Mergado.scrollTo(int topInPixels)</code></pre>
		</td>
		<td rowspan="2"><code class="highlighter-rouge">topInPixels</code>: Vertical scroll value, relative to app’s
			<code class="highlighter-rouge">IFRAME</code> viewport. Must be set in pixels.
		</td>
		<td>The browser’s absolute vertical scroll will be calculated automatically. Just set this Y value relative to
			your page.
		</td>
	</tr>
	<tr>
		<td>
			<b>Example:</b>
			<pre class="highlight"><code>Mergado.scrollTo(115)</code></pre>
		</td>
	</tr>
	<tr>
		<td rowspan="2">
			<pre class="highlight"><code>Mergado.setAppRoute(string fullAppRoute)</code></pre>
		</td>
		<td rowspan="2"><code class="highlighter-rouge">fullAppRoute</code>: Complete app route e.g.
			<code class="highlighter-rouge">eshop/1/project/2/help/</code></td>
		<td>The <code class="highlighter-rouge">fullAppRoute</code> parameter is than via JS method
			<code class="highlighter-rouge">history.replaceState()</code> apended into mergado URL as
			<code class="highlighter-rouge">route</code> query string. And if this URL is then invoked, this part is
			appended after app URL in IFRAME src attribute.
		</td>
	</tr>
	<tr>
		<td>
			<b>Example:</b><br>
			<ol>
				<li>
					App calls
					<pre class="highlight"><code>setAppRoute('eshop/1/project/2/help/')</code></pre>
				</li>
				<li>
					In Mergado URL is appended
					<pre class="highlight"><code>...&amp;route=eshop%2F1%2Fproject%2F2%2Fhelp%2F</code></pre>
				</li>
				<li>
					If this page is loaded then IFRAME src attribute is created from
					<pre class="highlight"><code>appcloud.mergado.com/apps/appname/</code></pre>
					and query string <code class="highlighter-rouge">route</code> parameter
					<pre class="highlight"><code>eshop/1/project/2/help/</code></pre>
				</li>
			</ol>
		</td>
	</tr>
	<tr>
		<td rowspan="2">
			<pre class="highlight"><code>Mergado.tellHeight([int heightInPixels])</code></pre>
		</td>
		<td rowspan="2"><code class="highlighter-rouge">heightInPixels</code> (optional): Can be set in pixels,
			<code class="highlighter-rouge">0</code> or <code class="highlighter-rouge">undefined</code></td>
		<td><b>DEPRECATED</b><br><br>The <em>wrapper page</em> will set height of app’s viewport
			<code class="highlighter-rouge">IFRAME</code> to this number of pixels. If no height is passed, it will be
			determined automatically.<br><br>For newly created apps since Mergado redesign in Spring 2018 this is no
			longer necessary, as the app’s iframe spans almost entire browser viewport and uses its own scrolling.
		</td>
	</tr>
	<tr>
		<td>
			<b>Example:</b>
			<pre class="highlight"><code>Mergado.tellHeight(260)</code></pre>
		</td>
	</tr>
	</tbody>
</table>

{: .message}
**Warning:** Do not manually *copy & paste* contents of `MessageAPI.js` file into your page's source code. Always include the remote `MessageAPI.js` script file provided by Mergado platform at `https://app.mergado.com/static/js/apps/MessageApi.js` or `https://app.mergado.com/static/js/apps/MessageApi.min.js`. This way you can be sure you use the most up-to-date version of MAIA.
