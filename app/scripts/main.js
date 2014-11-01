'use strict';

(function($) {
  $(document).ready(function() {

    //reset stretchbar
    var resetStretchBar = function() {
      $('.col').removeClass('active');
      $('#skills').css('top', '100vh');
      $('#skills').css('left', '0px');
    };

    //toggle the hamburger button
    var navToggle = function() {
      $('#nav-toggle').toggleClass('active');
    };

    // Toggle navbar on hamburger button click
    $('#nav-toggle').on('click', function(eventObject) {
      eventObject.preventDefault();
      if ($('.col').hasClass('active')) {
        $('.col').removeClass('active');
        $('#skills').css('top', '100vh');
        $('#skills').css('left', '0px');
      }
      else {
        $('#navbar').toggleClass('active');
      }
      navToggle();
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
      navToggle();
      $('#navbar').toggleClass('active');
      resetStretchBar();

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
      $('.active').removeClass('active');
      $(this).addClass('active');
      navToggle();
    });
  });
})(jQuery);
