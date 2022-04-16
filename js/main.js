$(document).ready(function() {

	//Loading page animation
	$('.preloader').fadeOut(2000, function () {

		$('body, html').css('overflow-y', 'visible');
	});

	//Show scroll btn
	var secOff = $('#bonus, #about').offset().top;

			$(window).on('scroll', function() {
				if ($(this).scrollTop() >= secOff) {
					$('.scroll-btn').removeClass('hide')
				} else {
					$('.scroll-btn').addClass('hide');
				}
			})
	
		// collapse the menu on clicking any link
		$('.navbar-nav .nav-item .nav-link:not(".dropdown-toggle"), .navbar-nav .nav-item .dropdown-item').click(() => {
			$('.navbar-collapse').removeClass('show');
			$('.navbar-toggler').attr('aria-expanded', false).addClass('collapsed')
		})

	// Video Popup
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	// Header will be given a bg white once you scroll

	// set bg images
	let takeBg = $("[bgImage=true]");
	takeBg.each(function (indexInArray, e) { 
	let bgUrl = $(e).attr('bgimageurl');
	$(e).css('backgroundImage', `url(${bgUrl})`)
	});
});