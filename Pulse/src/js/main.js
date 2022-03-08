$(document).ready(function () {
	//carousel
	$('.carousel__inner').slick({
		autoplay: true,
		adaptive: false,
		prevArrow: `<button type="button" class="slick-prev"><img src="img/slider/chevron-left-solid.png" alt="right"></button>`,
		nextArrow: `<button type="button" class="slick-next"><img src="img/slider/chevron right solid.png" alt="right"></button>`,
	});

	//tabs
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function () {
		$(this)
			.addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
	});

	//toggle items detail information
	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	//modal pop-up
	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn();
	});


	$('.button__mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn();
		});
	});

	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanx').fadeOut();
	});

	//validation
	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Введите свое имя",
					minlength: jQuery.validator.format("Введите {0} символа!")
				},
				phone: "Введите номер телефона",
				email: {
					required: "Введите свою почту",
					email: "Такой почты не существует"
				}
			}
		});
	};

	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');

	$('input[name=phone]').mask("+7 (999)-99-99");

	$('form').submit(function (e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "../mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanx').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});

	//smooth scroll pageUp

	$(window).scroll(()=>{
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href^='#']").click(() => {
		const _href = $(this).attr('href');
		$('html, body').animate({scrollTop: $(_href).offset().top+'px'});
		return false;
	});

});