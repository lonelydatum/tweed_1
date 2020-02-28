import {tl, pour} from '../../_common/js/common.js'


function start(){
	const tl_cup = new TimelineMax()
	tl_cup.to('.cup_line', 2.3, {y:-50, opacity:.6})
	tl_cup.to('.cup_line', .3, {opacity:0})


	
	tl.set(".frame1", {opacity:1})
	
	

	tl.from('.t1', .3, {opacity:0})
	tl.to('.t1', .3, {opacity:0}, "+=3")

	tl.to(".frame2", .3, {opacity:1})
	tl.call(pour)
	tl.add(tl_cup)

	tl.set('.liquid ',  {visibility:'hidden'})
	tl.to('.can', .5, {x:"+=60"})
	tl.from('.can_whole', .3, {x:"-=80"})

}





start()




module.exports = {};

