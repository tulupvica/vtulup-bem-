const videoBackground = {

    videoBackground: function() {

        const $videoSection = $('.story-video-bg'),
            $video = $videoSection.find('.story-video-bg__video'),
            $videoActive = ('story-video-bg_active'),
            $btnsGroup = $videoSection.find('.story-video-bg__buttons'),
            $play = $videoSection.find('.story-video-bg__btn-play'),
            $pause = $videoSection.find('.story-video-bg__btn-pause');

        $pause.hide();

        $play.on('click', function () {
            $video.css('width', 'auto');

            if($video[0].play()) {
                $play.hide();
                $videoSection.addClass($videoActive);
                $pause.show();
                $videoSection.hover(
                    function(){
                        $btnsGroup.fadeIn();
                    },
                    function(){
                        $btnsGroup.fadeOut();
                    });
                $video[0].play();
            }
        });

        $pause.on('click', function () {
          $video.css('width', '100%');

            if($video[0].play()) {
                $pause.hide();
                $play.show();
                $video[0].pause();
                $videoSection.removeClass($videoActive);
            }
        });
    }
};

export default videoBackground;