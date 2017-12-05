// ==UserScript==
// @name         Craigslist Better Styles
// @namespace    craigslist_better_styles
// @description  Moves the 'hide' button to standard location for faster hiding of items
// @homepageURL  https://github.com/daraeman/craigslist_better_styles
// @author       daraeman
// @version      1.0
// @date         2017-12-05
// @include      https://*.craigslist.org/search/*
// @downloadURL  https://github.com/daraeman/craigslist_better_styles/raw/master/craigslist_better_styles.user.js
// @updateURL    https://github.com/daraeman/craigslist_better_styles/raw/master/craigslist_better_styles.meta.js
// ==/UserScript==

const script_id = "craigslist_better_styles";
const styles = "."+ script_id +" .banish { float: left; margin-right: 5px; margin-top: 3px; }";

function createStyles() {
	let style_el = document.createElement( "style" );
	style_el.textContent = styles;
	style_el.className = script_id;
	document.head.appendChild( style_el );
}

function init() {
	document.body.className = document.body.className + " " + script_id;
	createStyles();
}

init();
