$(document).ready(function() {
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