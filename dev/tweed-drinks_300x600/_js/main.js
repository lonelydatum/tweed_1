TweenLite.defaultEase = Power3.easeInOut

function start(){
	const tl_cup = new TimelineMax()
	tl_cup.to('.cup_line', 2.8, {y:-20, opacity:.6})
	tl_cup.to('.cup_line', .3, {opacity:0})


	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	

	tl.from('.t1', .3, {opacity:0})
	tl.to('.t1', .3, {opacity:0}, "+=3")

	tl.to(".frame2", .3, {opacity:1})

	tl.add(tl_cup)
	tl.to('.liquid ', .3, {opacity:0})
	tl.to('.can', .5, {x:"+=140"})
	tl.from('.can_whole', .3, {x:"-=140"})

}


TweenMax.to('.liquid_1', .06, {opacity:.2, repeat:33,  yoyo:true, repeatDelay:.2})
TweenMax.to('.liquid_0', .08, {opacity:.8, repeat:33,  yoyo:true, repeatDelay:.5})




// liquid.add('one')
// liquid.set('.liquid_0', {opacity:1}, 'one')
// liquid.set('.liquid_1', {opacity:0}, 'one')

// liquid.add('two', "+=1")
// liquid.set('.liquid_0', {opacity:0}, 'two')
// liquid.set('.liquid_1', {opacity:1}, 'two')



start()




module.exports = {};

