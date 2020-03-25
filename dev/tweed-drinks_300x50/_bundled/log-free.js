(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

var legalButton = document.getElementById("legalBtn");

if (legalButton) {
	legalButton.addEventListener("click", function () {
		TweenLite.set("#legalContent", { visibility: 'visible' });
	});
}

TweenLite.defaultEase = Power2.easeInOut;
var tl = new TimelineMax({ repeat: 2, repeatDelay: 2 });

function pour() {

	var tl_pour = new TimelineMax();
	// tl_pour.set('.liquid ',  {visibility:'visible'})
	TweenMax.to('.liquid_1', .06, { opacity: .2, repeat: 120, yoyo: true, repeatDelay: .2 });
	TweenMax.to('.liquid_0', .08, { opacity: .8, repeat: 120, yoyo: true, repeatDelay: .5 });
	// TweenMax.to('.liquid_1', .08, {opacity:.8, repeat:1633,  yoyo:true, repeatDelay:.2})
}

exports.size = size;
exports.tl = tl;
exports.pour = pour;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {

	_commonJsCommonJs.tl.set(".frame1", { opacity: 1 });

	_commonJsCommonJs.tl.from('.t1', .3, { opacity: 0 });

	_commonJsCommonJs.tl.to('.t1', .3, { opacity: 0 }, "+=2.6");

	_commonJsCommonJs.tl.add('end', '+=.1');
	_commonJsCommonJs.tl.from('.can_open', .01, { opacity: 0 }, "end");
	_commonJsCommonJs.tl.from('.logo_text', .3, { opacity: 0 }, "end");
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
