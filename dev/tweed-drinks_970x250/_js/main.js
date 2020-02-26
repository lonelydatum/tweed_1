

function start(){
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	tl.from('.t1', .3, {opacity:0})
	
	tl.to('.t1', .3, {opacity:0}, "+=2.6")


	
	
	tl.add('end', '+=.1')
	tl.from('.product', .5, {opacity:0}, "end")
	

	

}

start()




module.exports = {};

