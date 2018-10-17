import burgerBtn from './modules/burgerBtn';
import heroSlider from './modules/heroSlider';
import hiddenScroll from './modules/hiddenScroll';
import videoBackground from './modules/story-video-bg';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
      burgerBtn.burgerBtn();
      heroSlider.heroSlider();
      videoBackground.videoBackground();
      hiddenScroll.hiddenScroll();
  });

})(jQuery);