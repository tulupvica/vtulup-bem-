import burgerBtn from './modules/burgerBtn';
import heroSlider from './modules/heroSlider';
import hiddenScroll from './modules/hiddenScroll';
import videoBackground from './modules/story-video-bg';
import testimonialSlider from './modules/testimonialSlider';
import clientsSlider from './modules/clientsSlider';

( ($) => {
    'use strict';

  // When DOM is ready
  $(() => {
      burgerBtn.burgerBtn();
      heroSlider.heroSlider();
      hiddenScroll.hiddenScroll();
      videoBackground.videoBackground();
      testimonialSlider.testimonialSlider();
      clientsSlider.clientsSlider();

  });


})(jQuery);