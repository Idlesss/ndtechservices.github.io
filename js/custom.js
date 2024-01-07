(function ($) {
  "use strict";

  // COUNTER NUMBERS
  jQuery(".counter-thumb").appear(function () {
    jQuery(".counter-number").countTo();
  });

  // BACKSTRETCH SLIDESHOW
  $(".hero-section").backstretch(
    [
      "images/slideshow/Karosel1.jpg",
      "images/slideshow/Karosel2.jpg",
      "images/slideshow/Karosel3.jpg"
      // "https://drive.google.com/uc?export=view&id=19k5t0O7jga-HvPQLdorkMK2dJH3jHJTM",
      // "https://drive.google.com/uc?export=view&id=19h3g_QPaLtiv15jLf_BZJps3UkzQYa3_"
    ],
    { duration: 2000, fade: 750 }
  );

  // CUSTOM LINK
  $(".smoothscroll").click(function () {
    var el = $(this).attr("href");
    var elWrapped = $(el);

    scrollToDiv(elWrapped);
    return false;

    function scrollToDiv(element) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $("body,html").animate(
        {
          scrollTop: totalScroll
        },
        300
      );
    }
  });
})(window.jQuery);
