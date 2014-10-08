'use strict';

(function($) {
  $(document).ready(function() {

    // Toggle navbar on hamburger button click
    $('#nav-toggle').on('click', function(eventObject) {
      eventObject.preventDefault();
      $(this).toggleClass('active');
      $('#navbar').toggleClass('active');
    });

    //When navbar link clicked, untoggle and scroll
    $('.list-link').on('click', function(eventObject) {
      eventObject.preventDefault();
      if ($(this).hasClass('intro')) {
        $('html, body').animate({scrollTop: $('#intro').offset().top}, 1000);
      }
      if ($(this).hasClass('skills')) {
        $('html, body').animate({scrollTop: $('#skills').offset().top}, 1000);
      }
      $('#nav-toggle').toggleClass('active');
      $('#navbar').toggleClass('active');

    });

    //Skills stretchbar code - stretch/shrink when clicked.
    $('.col').click(function() {
      //If mobile window, stretch .col tall
      if ($(window).width() < 800) {
        if ($(this).hasClass('col1')) {
          $('#skills').css('top', '100vh');
        }
        else if ($(this).hasClass('col2')) {
          $('#skills').css('top', '75vh');
        }
        else if ($(this).hasClass('col3')) {
          $('#skills').css('top', '50vh');
        }
        else if ($(this).hasClass('col4')) {
          $('#skills').css('top', '25vh');
        }
      }
      //if wider window, stretch .col wide.
      else {
        if ($(this).hasClass('col1')) {
          $('#skills').css('left', '0%');
        }
        else if ($(this).hasClass('col2')) {
          $('#skills').css('left', '-25%');
        }
        else if ($(this).hasClass('col3')) {
          $('#skills').css('left', '-50%');
        }
        else if ($(this).hasClass('col4')) {
          $('#skills').css('left', '-75%');
        }
      }

      //if .col active, remove. If inactive, make active.
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('#skills').css('top', '100vh');
        $('#skills').css('left', '0px');
        // $('#nav-toggle').removeClass('active');
      }
      else {
        $('.active').removeClass('active');
        $(this).addClass('active');
        // $('#nav-toggle').addClass('active');
      }
    });
  });
})(jQuery);
