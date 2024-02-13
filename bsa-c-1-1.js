<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

<script>
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
</script>

<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />

<style>
.container img {margin:auto;}
  
  .slick-prev:before {
  color: black !important;
  background-color: #FFFFFF;
}
.slick-next:before {
  color: black !important;
  background-color: #FFFFFF;
  }

.slick-track
{
    display: flex !important;
  }

  .slick-slide
{
    height: inherit !important;
  }

  
</style>