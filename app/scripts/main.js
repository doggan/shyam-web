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
});
