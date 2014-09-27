'use strict';

(function($) {
  $(document).ready(function() {

    $('#nav-toggle').on('click', function(eventObject) {
      eventObject.preventDefault();
      // $(this).toggleClass('active');
      $('#navbar').toggleClass('active');
    });

    $('.list-link').on('click', function(eventObject) {
      eventObject.preventDefault();
      $('#navbar').removeClass('active');
    });
  });
})(jQuery);
