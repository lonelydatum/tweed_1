(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function start() {
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.from('.t1', .3, { opacity: 0 });
	tl.to('.t1', .3, { opacity: 0 }, "+=2");

	tl.set(".frame2", { opacity: 1 });
	tl.from('.t2', .3, { opacity: 0 });
	tl.add('smoke');
	// tl.from('.smoke', .3, {opacity:0, scale:1.2}, 'smoke+=.4')
	tl.from('.product_1', .3, { opacity: 0 }, "smoke");
	tl.to('.frame2', .3, { opacity: 0 }, "+=2");

	tl.set(".frame3", { opacity: 1 });
	tl.from('.t3', .3, { opacity: 0 });
	tl.from('.product_2', .3, { opacity: 0 }, "+=.3");
	tl.to('.frame3', .3, { opacity: 0 }, "+=2");

	tl.set(".frame4", { opacity: 1 });
	tl.from('.t4', .3, { opacity: 0 });
	tl.from('.product_3', .3, { opacity: 0 }, "+=.3");

	// tl.set(".frame3", {opacity:1})
	// tl.from('.logo_text', .3, {opacity:0})
	// tl.from('.cta', .3, {opacity:0}, "+=.2")

	// tl.set(".frame3", {opacity:1})
	// tl.from('.product', .3, {opacity:0})
	// tl.to('.product', .3, {opacity:0}, "+=2")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
