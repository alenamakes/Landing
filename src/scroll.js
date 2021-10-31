var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('footer').outerHeight();
$('footer').hide(true);

$(window).scroll(function(event) {
  didScroll = true;
  $('footer').show(true);
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  if (st > lastScrollTop && st > navbarHeight ) {
    $('footer').removeClass('nav-up').addClass('nav-down');
  } else {
    if (st + $(window).height() < $(document).height()) {
      $('footer').removeClass('nav-down').addClass('nav-up');
    }
  }
  lastScrollTop = st;
}