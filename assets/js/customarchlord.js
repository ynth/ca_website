$(document).ready(function () {
	
	$(window).scroll(function () {
		
		if ($(this).scrollTop() > 10) {
			$('.navbar-fixed-top').addClass("sticky-top");
		} else {
			$('.navbar-fixed-top').removeClass("sticky-top");
		}
	});

	$('.scroll-me a').bind('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1200, 'easeInOutExpo');
		event.preventDefault();
	});

	$('.login').click(function (e) {
		e.preventDefault();
		$('#exampleModal').arcticmodal();
	});

	$('.reg').click(function (e) {
		e.preventDefault();
		$('#exampleModal1').arcticmodal();
	});

	$('.dow').click(function (e) {
		e.preventDefault();
		$('#exampleModal2').arcticmodal();
	});

	var btn = $('#button');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function (e) {
		
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '300');
	});




});