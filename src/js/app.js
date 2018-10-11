import burgerBtn from './modules/burgerBtn';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
      burgerBtn.burgerBtn();
  });

})(jQuery);