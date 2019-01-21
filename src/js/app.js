import burgerBtn from './modules/burgerBtn';
import heroSlider from './modules/heroSlider';
import hiddenScroll from './modules/hiddenScroll';
import testimonialSlider from './modules/testimonialSlider';
import clientsSlider from './modules/clientsSlider';
import loadImages from './modules/loadImages';
import videoInModal from './modules/videoInModal';



( ($) => {
    'use strict';

  // When DOM is ready
  $(() => {
      burgerBtn.burgerBtn();
      heroSlider.heroSlider();
      hiddenScroll.hiddenScroll();
      testimonialSlider.testimonialSlider();
      clientsSlider.clientsSlider();
      loadImages.loadImages();
      videoInModal.videoInModal();
  });


})(jQuery);