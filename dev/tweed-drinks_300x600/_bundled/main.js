(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

TweenLite.defaultEase = Power3.easeInOut;

function start() {
	var tl_cup = new TimelineMax();
	tl_cup.to('.cup_line', 2.8, { y: -20, opacity: .6 });
	tl_cup.to('.cup_line', .3, { opacity: 0 });

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.from('.t1', .3, { opacity: 0 });
	tl.to('.t1', .3, { opacity: 0 }, "+=3");

	tl.to(".frame2", .3, { opacity: 1 });

	tl.add(tl_cup);
	tl.to('.liquid ', .3, { opacity: 0 });
	tl.to('.can', .5, { x: "+=140" });
	tl.from('.can_whole', .3, { x: "-=140" });
}

TweenMax.to('.liquid_1', .06, { opacity: .2, repeat: 33, yoyo: true, repeatDelay: .2 });
TweenMax.to('.liquid_0', .08, { opacity: .8, repeat: 33, yoyo: true, repeatDelay: .5 });

// liquid.add('one')
// liquid.set('.liquid_0', {opacity:1}, 'one')
// liquid.set('.liquid_1', {opacity:0}, 'one')

// liquid.add('two', "+=1")
// liquid.set('.liquid_0', {opacity:0}, 'two')
// liquid.set('.liquid_1', {opacity:1}, 'two')

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
