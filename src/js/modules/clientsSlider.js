const clientsSlider = {

    clientsSlider: function () {

        const $slider = $('.clients-list');
        const screenWidth = $(window).width();
        const matchMedia = 768;


        if(!$slider.length){
            return;
        }

        function initSlider() {

            $slider.slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true,
                dotsClass: 'clients-list__dots',
                adaptiveHeight: true
            });
        }


        if(screenWidth < matchMedia) {
            initSlider();
        }

        //
        // $(window).on('resize', function(){
        //     if(screenWidth > matchMedia) {
                // $slider.slick('unslick');
        //
        //     }
        // });

    }
};

export default clientsSlider;