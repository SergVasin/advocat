
// АДВОКАТ

// попап команда

$(document).ready(function () {
	$(".team__item-img-abs1").click(function () {
		$('.team__team-popup1').addClass("team__team-popup-open");
	})
});
$(document).ready(function () {
	$(".team__item-img-abs2").click(function () {
		$('.team__team-popup2').addClass("team__team-popup-open");
	})
});
$(document).ready(function () {
	$(".team__item-img-abs3").click(function () {
		$('.team__team-popup3').addClass("team__team-popup-open");
	})
});
$(document).ready(function () {
	$(".team-popup__item-close").click(function () {
		$('.team__team-popup').removeClass("team__team-popup-open");
	})
});

// слайдер отзывы


$(document).ready(function () {
	$(".reviews__reviews-slider").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: false,
		smartSpeed: 300,
	});

	 var owl = $('.reviews__reviews-slider');
	 owl.owlCarousel();
	 $('.reviews-slider__NextBtn').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	 $('.reviews-slider__PrevBtn').click(function() {
	     owl.trigger('prev.owl.carousel', [500]);
	 })
});

$(document).ready(function () {
	$(".hover-open").hover(function () {
		$('.hover').toggleClass("hover-add");
	})
});
