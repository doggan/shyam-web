'use strict';

$(document).ready(function() {
  // Email address obfuscation:
  var e = 'shyamguth';
  var t = 'gmail';
  var n = '.com';
  var q = e + '@' + t + n;
  var r = 'mailto:' + q;

  // Set mailto links:
  $('.contact-email').each(function() {
    $(this).attr('href', r);
  });
  // Set email display text:
  $('.contact-email-text').each(function() {
    $(this).text(q);
  });

  // Highlight the top nav as scrolling occurs
  $('body ').scrollspy({
    offset: $(window).height() * 0.55,
    target: '.navbar-fixed-top'
  });
});

var scrollTime = 1000;

$('.smoothscroll').on('click', function(e) {
  e.preventDefault();

  var target = this.hash,
    $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, scrollTime, 'swing', function() {
    window.location.hash = target;
  });
});

// Closes the nav menu when an item is clicked
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});
