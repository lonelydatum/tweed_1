(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;
var tl = new TimelineMax({ repeat: 2, repeatDelay: 1.6 });

function pour() {

	var tl_pour = new TimelineMax();
	tl_pour.set('.liquid ', { visibility: 'visible' });
	tl_pour.to('.liquid_1', .06, { opacity: .2, repeat: 633, yoyo: true, repeatDelay: .2 }, 0);
	tl_pour.to('.liquid_0', .08, { opacity: .8, repeat: 633, yoyo: true, repeatDelay: .5 }, 0);
}

exports.size = size;
exports.tl = tl;
exports.pour = pour;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {

	_commonJsCommonJs.tl.set(".frame1", { opacity: 1 });
	_commonJsCommonJs.tl.set(".legal_2", { opacity: 0 });
	_commonJsCommonJs.tl.from('.t1', .3, { opacity: 0 });
	_commonJsCommonJs.tl.to('.t1', .3, { opacity: 0 }, "+=2.3");

	_commonJsCommonJs.tl.set(".frame2", { opacity: 1 });
	_commonJsCommonJs.tl.from('.t2', .3, { opacity: 0 });
	_commonJsCommonJs.tl.add('smoke');
	// tl.from('.smoke', .3, {opacity:0, scale:1.2}, 'smoke+=.4')
	_commonJsCommonJs.tl.from('.product_1', .3, { opacity: 0 }, "smoke");
	_commonJsCommonJs.tl.to('.frame2', .3, { opacity: 0 }, "+=2");

	_commonJsCommonJs.tl.set(".frame4", { opacity: 1 });
	_commonJsCommonJs.tl.from('.t4', .3, { opacity: 0 });
	_commonJsCommonJs.tl.from('.product_3', .3, { opacity: 0 }, "+=.3");
	_commonJsCommonJs.tl.to('.frame4', .3, { opacity: 0 }, "+=2");

	_commonJsCommonJs.tl.set(".frame5", { opacity: 1 });
	_commonJsCommonJs.tl.from('.t5', .3, { opacity: 0 });
	_commonJsCommonJs.tl.from('.product_4', .3, { opacity: 0 }, "+=.3");

	// tl.set(".frame3", {opacity:1})
	// tl.from('.logo_text', .3, {opacity:0})
	// tl.from('.cta', .3, {opacity:0}, "+=.2")

	// tl.set(".frame3", {opacity:1})
	// tl.from('.product', .3, {opacity:0})
	// tl.to('.product', .3, {opacity:0}, "+=2")
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
