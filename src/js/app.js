import burgerBtn from './modules/burgerBtn';
import heroSlider from './modules/heroSlider';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
      burgerBtn.burgerBtn();
      heroSlider.heroSlider();
  });

})(jQuery);