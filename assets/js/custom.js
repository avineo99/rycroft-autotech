
$(document).ready(function () {
	$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#ScrollToTop').fadeIn();
        } else {
            $('#ScrollToTop').fadeOut();
        }
		
		if ($(window).width() > 991.98) {
			 if ($(document).scrollTop() > 50) {
				$('#Header').addClass('fixed-top');
				$('#Header').addClass('shrink');
			}
			else {
				$('#Header').removeClass('fixed-top');
				$('#Header').removeClass('shrink');
			}
		}
    });

    $('#ScrollToTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });  
	
	 
	  
});


   



$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("body").addClass("scroll");
  } else {
    $("body").removeClass("scroll");
  }
});
$(".srch_btn").click(function () {
  $("header").toggleClass("serch_show");
});

$(".testimonial-wrap").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  pauseOnFocus: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991.60,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
