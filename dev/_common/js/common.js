const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

const legalButton = document.getElementById("legalBtn")

if(legalButton){
	legalButton.addEventListener("click", ()=>{
		TweenLite.set("#legalContent", {visibility:'visible'})
	})
}

TweenLite.defaultEase = Power2.easeInOut
const tl = new TimelineMax({repeat:2, repeatDelay: 2})

function pour(){

	const tl_pour = new TimelineMax()
	// tl_pour.set('.liquid ',  {visibility:'visible'})
	TweenMax.to('.liquid_1', .06, {opacity:.2, repeat:120,  yoyo:true, repeatDelay:.2})
	TweenMax.to('.liquid_0', .08, {opacity:.8, repeat:120,  yoyo:true, repeatDelay:.5})
	// TweenMax.to('.liquid_1', .08, {opacity:.8, repeat:1633,  yoyo:true, repeatDelay:.2})
}

export {size, tl, pour}