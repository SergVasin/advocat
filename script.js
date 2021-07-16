// АДВОКАТ

// ! добавление слайдера

$(document).ready(function () {
	function checkWidth() {
		var windowWidth = $('body').innerWidth(),
			elem = $(".team__wr");

		if (windowWidth < 979) {
			elem.addClass('owl-carousel');
			elem.addClass('team__wr-add');
		}
		else {
			elem.removeClass('owl-carousel');
			elem.removeClass('team__wr-add');
		}
	}

	checkWidth();

	$(window).resize(function () {
		checkWidth();
	});
});

$(document).ready(function () {
	function checkWidth() {
		var windowWidth = $('body').innerWidth(),
			elem = $(".news__news-wr");

		if (windowWidth < 979) {
			elem.addClass('owl-carousel');
			elem.addClass('news__news-wr-add');
		}
		else {
			elem.removeClass('owl-carousel');
			elem.removeClass('news__news-wr-add');
		}
	}

	checkWidth();

	$(window).resize(function () {
		checkWidth();
	});
});

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

	$(".team__wr-add").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: false,
		smartSpeed: 300,
	});

	$(".news__news-wr-add").owlCarousel({
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

$(window).resize(function() {
    if ($(window).width() < 1199) {
        $(".nav__item").removeClass('hover-open');
    }
}).resize();

$(window).resize(function() {
    if ($(window).width() < 1199) {
        $(".hover-mob").addClass('hover-mob-add');
    }
}).resize();

$(document).ready(function () {
	$(".hover-mob-add").click(function () {
		$('.hover').toggleClass("hover-add");
	})
});

$(document).ready(function () {
	$(".nav-mob").click(function () {
		$('.nav').addClass("nav-add");
	})
});
$(document).ready(function () {
	$(".nav__close").click(function () {
		$('.nav').removeClass("nav-add");
	})
});


