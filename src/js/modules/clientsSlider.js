const clientsSlider = {

  clientsSlider: function () {

    const $slider = $('.clients-list');
    const matchMedia = 767;


    if (!$slider.length) {
      return;
    }

    function initSlider() {

      $slider.slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: '<button type="button" class="clients-list__prev-btn">' +
            '<img src="../../../assets/images/btn-prev.png" alt="prev">' +
            '</button>',
        nextArrow: '<button type="button" class="clients-list__next-btn">' +
            '<img src="../../../assets/images/btn-next.png" alt="next">' +
            '</button>',
        responsive: [
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      });
    }

    function mobileSlider() {

      if ($(window).width() > matchMedia) {
        if ($slider.hasClass('slick-initialized')) {
          $slider.slick('unslick');
        }
      }
      else {
        if (!$slider.hasClass('slick-initialized')) {
          initSlider();
        }
      }

    }

    $(window).on('load resize', mobileSlider);

  }
};

export default clientsSlider;