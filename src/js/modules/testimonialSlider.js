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
          // fade: true,
          infinite: false,
          initialSlide: 2,
          // slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
          focusOnSelect: true,
          variableWidth: true,
          draggable: false,
          asNavFor: $sliderText,
      });
  }
};

export default testimonialSlider;
