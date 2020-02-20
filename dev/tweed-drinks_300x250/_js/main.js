

function start(){
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	tl.from('.t1', .3, {opacity:0})
	tl.to('.t1', .3, {opacity:0}, "+=3")


	tl.set(".frame2", {opacity:1})
	tl.from('.product', .3, {opacity:0})
	tl.to('.product', .3, {opacity:0}, "+=3")

	tl.set(".frame3", {opacity:1})
	tl.from('.logo_text', .3, {opacity:0})
	tl.from('.cta', .3, {opacity:0}, "+=.2")

}

start()




module.exports = {};

