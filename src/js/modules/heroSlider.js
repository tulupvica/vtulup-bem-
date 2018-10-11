const heroSlider = {

    heroSlider: function () {

        const $slider = $('.hero-slider');

        $slider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
};

export default heroSlider;


