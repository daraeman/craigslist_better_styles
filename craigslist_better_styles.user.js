// ==UserScript==
// @name        Craigslist Better Styles
// @namespace   craigslist_better_styles
// @description Improve Craigslist stylesheets
// @include     https://*.craigslist.org/search/*
// @version     1.1
// @grant       none
// ==/UserScript==

const script_id = "craigslist_better_styles";
let last_type;
const styles = {
	"thumb": "."+ script_id +" .banish { float: right; }",
	"gallery": "."+ script_id +" .banish { position: absolute; bottom: 0; right: 0 }",
};

function getListType() {
	let type_chooser_el = document.getElementsByClassName( "search-view" )[0];
	let selected_el = type_chooser_el.querySelector( ".dropdown-item.sel" );
	return selected_el.getElementsByTagName( "button" )[0].textContent.trim();
}

function removeStyles() {
	let style_el = document.querySelector( "style."+ script_id );
	if ( style_el )
		style_el.remove();
}

function createStyles( type ) {

	if ( ! styles[ type ] )
		return;

	let style_el = document.createElement( "style" );
	style_el.textContent = styles[ type ];
	style_el.className = script_id;
	document.head.appendChild( style_el );
}

function updateStyles() {
	let current_type = getListType();

	if ( current_type == last_type )
		return;

	last_type = current_type;

	removeStyles();
	createStyles( current_type );
}

function init() {
	document.body.className = document.body.className + " " + script_id;
}


init();
updateStyles();