import {tl} from '../../_common/js/common.js'

function start(){
	
	tl.set(".frame1", {opacity:1})
	
	tl.from('.t1', .3, {opacity:0})
	
	tl.to('.t1', .3, {opacity:0}, "+=2.6")


	
	
	tl.add('end', '+=.1')
	tl.from('.can_open', .01, {opacity:0}, "end")
	tl.from('.logo_text', .3, {opacity:0}, "end")

	

}

start()




module.exports = {};

