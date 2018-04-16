'use strict';

/**
 * Auto generated Table of Content from HTML structure.
 */

// Some utils, to make manipulation with DOM less painful.
const dom = {
	id: (id) => document.getElementById(id),
	qsa: (element, query) => element.querySelectorAll(query),
	qsaEach: (element, query, callback) => element.querySelectorAll(query).forEach(callback),
	is: (element, selector) => (element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.webkitMatchesSelector || element.oMatchesSelector || (() => false)).call(element, selector),
	offsetTop: (element) => element.getBoundingClientRect().top + window.scrollY,
	ready: (callback) => document.addEventListener('DOMContentLoaded', callback),
	on(element, eventType, target, callback) {
		element.addEventListener(eventType, (event) => {
			const isTarget = !target || this.is(event.target, target);
			const isTargetChild = !target || this.closest(event.target, target);

			if (isTarget || isTargetChild) {
				callback(event, event.target);
			}
		});
	},

	closest(element, selector) {
		do {
			if (this.is(element, selector)) {
				return element;
			}

			element = element.parentNode;
		} while(!this.is(element, 'body'));

		return false;
	},

	scrollBody: (position) => {
		document.body.scrollTop = document.documentElement.scrollTop = position;
	},

	map: (nodeList, callback) => Array.prototype.map.call(nodeList, callback),
};


/**
 * Get Heading (H1 & h2) structure from content.
 *
 * @param Node Content wrapper
 * @return Array
 */
const getHeadingStructure = (wrapper) => dom.map(dom.qsa(wrapper, 'h1'), (h1) => {
	let sibling = h1.nextSibling;
	const heading = {
		name: h1.textContent,
		children: [],
	};

	while (sibling && !dom.is(sibling, 'h1')) {
		if (dom.is(sibling, 'h2')) {
			heading.children.push({
				id: sibling.id,
				name: sibling.textContent,
			});
		}

		sibling = sibling.nextSibling;
	}

	return heading;
});


/**
 * Create menu HTML from headings structure.
 *
 * @param Array Menu structure from getHeadingStructure()
 * @return string
 */
const getMenuHtml = (structure) => structure.map((heading) => {
	const children = heading.children.map((child) => `
		<li>
			<a href="#${child.id}">${child.name}</a>
		</li>
	`).join('');

	return `
		<h4 class="menu-section-header">
			${heading.name}
		</h4>
		<ul>
			${children}
		</ul>
	`;
}).join('');


/**
 * Set active link (and unset previous).
 *
 * @param Node Menu wrapper.
 * @param Node Link element.
 * @return void
 */
const setActiveLink = (menu, link) => {
	dom.qsaEach(menu, '.active', (item) => {
		item.classList.remove('active');
	})

	link.classList.add('active');
}


/**
 * Autogenerate menu from content heading structure.
 *
 * @return void
 */
dom.ready(() => {
	const contentWrapper = dom.id('toc-content-wrapper');
	const menuWrapper = dom.id('toc-menu-wrapper');

	if (contentWrapper && menuWrapper) {
		const headingStructure = getHeadingStructure(contentWrapper);

		menuWrapper.innerHTML = getMenuHtml(headingStructure);

		// There is 51px fixed bar on top of the page,
		// which cover heading, when user clicks on menu item.
		// This solves this problem, by manually scrolling
		// to the heading in a way, that keeps it visible.
		dom.on(menuWrapper, 'click', 'a', (event) => {
			const link = event.target;
			const fragment = link.href.substring(link.href.indexOf('#') + 1);
			const target = dom.id(fragment);

			if (target) {
				dom.scrollBody(dom.offsetTop(target) - 90);
				setActiveLink(menuWrapper, event.target);

				event.preventDefault();
				event.target.blur();
			}
		});
	}
});
