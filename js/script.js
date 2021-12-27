// owlCarousel
$('#owl-carousel').owlCarousel({
    loop: true,
	autoplay: true,
	autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 20,
    dots: true,
    nav: false,
    items: 2,
	responsive: 
	{
		0: {
			items: 1
		},
		700: {
			items: 2
			},
		992: {
			items: 3
		},
		1200: {
			items: 4
		}
    }
})
// mixitup
var mixer = mixitup('.mixItUpContent',{
	animation:{
		effectsOut:'fade translateX(-100%)',
	}
});