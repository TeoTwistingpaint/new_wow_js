/* Check if element is in viewport */
$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

/* Check if element exists in page */

$(window).on("resize scroll", function () {
  $(".target").each(function () {
    $elem = $(this);
    /* Check if element is in viewport */
    if ($elem.isInViewport()) {
      $elem.addClass("start");
    } else {
      $elem.removeClass("start");
    }
  });
});
