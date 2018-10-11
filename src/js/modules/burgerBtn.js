const burgerBtn = {

    burgerBtn: function () {

      const $header = $('.main-header'),
          $nav = $header.find('.main-nav'),
          $navActive = ('main-nav_active'),
          $btn = $header.find('.burger-btn'),
          $btnActive = ('burger-btn_active'),
          width = 768;

        $btn.on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass($btnActive);
            $nav.toggleClass($navActive);
        });

        $(window).on('resize', function () {
            if($(window).width() > width) {
                $nav.removeClass($navActive);
                $btn.removeClass($btnActive);
            }
        });
    }
};

export default burgerBtn;