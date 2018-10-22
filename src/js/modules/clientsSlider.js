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
                arrows: true,
                prevArrow: '<button type="button" class="clients-list__prev-btn">' +
                    '<img src="../../../assets/images/btn-prev.png" alt="prev">' +
                    '</button>',
                nextArrow: '<button type="button" class="clients-list__next-btn">' +
                    '<img src="../../../assets/images/btn-next.png" alt="next">' +
                    '</button>',
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