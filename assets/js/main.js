$('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 400,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    prevArrow:'<button type="button" class="slick-prev-slide-top"><i class="ti-angle-left slick-slider-icon"></i></button>',
    nextArrow:'<button type="button" class="slick-next-slide-top"><i class="ti-angle-right slick-slider-icon"></i></button>',
    });




    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow:'<button type="button" class="slick-prev-slide-discover"><i class="ti-angle-left slick-slider-icon"></i></button>',
        nextArrow:'<button type="button" class="slick-next-slide-discover"><i class="ti-angle-right slick-slider-icon"></i></button>',
      }); 