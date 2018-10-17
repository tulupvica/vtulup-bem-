const testimonialSlider = {

  testimonialSlider: function () {

      const $slider = $('.testimonial-slider'),
          $sliderText = $('.testimonial-slider-text'),
          $sliderPhoto = $('.testimonial-slider-photo');

      if (!$slider.length) {
          return;
      }

      $sliderText.slick({
          fade: true,
          infinite: false,
          initialSlide: 2,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          draggable: false,
          asNavFor: $sliderPhoto,
      });

      $sliderPhoto.slick({
          infinite: true,
          initialSlide: 2,
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '8px',
          focusOnSelect: true,
          variableWidth: true,
          draggable: false,
          prevArrow: '<button type="button" class="testimonial-slider-photo__prev-btn"></button>',
          nextArrow: '<button type="button" class="testimonial-slider-photo__next-btn"></button>',
          asNavFor: $sliderText,
          responsive: [
              {
                  breakpoint: 767,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1
                  }
              }
          ]
      });
  }
};

export default testimonialSlider;
