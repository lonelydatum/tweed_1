import {tl, pour} from '../../_common/js/common.js'



function start(){
	pour()
	const tl_cup = new TimelineMax()
	tl_cup.to('.cup_line', 2.8, {y:-20, opacity:.6})
	tl_cup.to('.cup_line', .3, {opacity:0})


	
	tl.set(".frame1", {opacity:1})
	
	

	tl.from('.t1', .3, {opacity:0})
	tl.to('.t1', .3, {opacity:0}, "+=3")

	
	tl.to(".frame2", .3, {opacity:1})
	tl.set('.liquid ',  {visibility:'visible'})
	tl.add(tl_cup)
	tl.set('.liquid ',  {visibility:'hidden'})


	tl.to('.can', .5, {x:"+=140"})
	tl.from('.can_whole', .3, {x:"-=140"})

}






start()




module.exports = {};

