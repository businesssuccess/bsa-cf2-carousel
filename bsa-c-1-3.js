
	$(function () {
		$('[data-title="cf-slick-slider"]').each(function () {
		var containerClass = 'col-inner';
		if ($(this).hasClass('container')) {
			containerClass = 'containerInnerV2';}
		$('.'+containerClass, this).slick({

			autoplay: true,
			dots: true,
			infinite: true,
			arrows: true,
			autoplaySpeed: 4000,
            speed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
              responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
		});
	});
});
