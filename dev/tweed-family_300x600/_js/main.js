

function start(){
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	tl.from('.t1', .3, {opacity:0})
	tl.to('.t1', .3, {opacity:0}, "+=2.3")


	tl.set(".frame2", {opacity:1})
	tl.from('.t2', .3, {opacity:0})
	tl.add('smoke')
	// tl.from('.smoke', .3, {opacity:0, scale:1.2}, 'smoke+=.4')
	tl.from('.product_1', .3, {opacity:0}, "smoke")
	tl.to('.frame2', .3, {opacity:0}, "+=2")

	tl.set(".frame3", {opacity:1})
	tl.from('.t3', .3, {opacity:0})
	tl.from('.product_2', .3, {opacity:0}, "+=.3")
	tl.to('.frame3', .3, {opacity:0}, "+=2")


	tl.set(".frame4", {opacity:1})
	tl.from('.t4', .3, {opacity:0})
	tl.from('.product_3', .3, {opacity:0}, "+=.3")
	

	// tl.set(".frame3", {opacity:1})
	// tl.from('.logo_text', .3, {opacity:0})
	// tl.from('.cta', .3, {opacity:0}, "+=.2")

	// tl.set(".frame3", {opacity:1})
	// tl.from('.product', .3, {opacity:0})
	// tl.to('.product', .3, {opacity:0}, "+=2")

}

start()




module.exports = {};

