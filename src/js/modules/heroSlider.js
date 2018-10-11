const heroSlider = {

    heroSlider: function () {

        const $slider = $('.hero-slider');

        if(!$slider.length){
            return;
        }

        $slider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            dotsClass: 'hero-slider__dots'
        });
    }
};

export default heroSlider;


