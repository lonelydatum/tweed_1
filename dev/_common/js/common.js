const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut
const tl = new TimelineMax({repeat:2, repeatDelay: 1.6})

function pour(){

	const tl_pour = new TimelineMax()
	tl_pour.set('.liquid ',  {visibility:'visible'})
	tl_pour.to('.liquid_1', .06, {opacity:.2, repeat:633,  yoyo:true, repeatDelay:.2}, 0)
	tl_pour.to('.liquid_0', .08, {opacity:.8, repeat:633,  yoyo:true, repeatDelay:.5}, 0)
}

export {size, tl, pour}