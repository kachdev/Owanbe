var welcomeSlide = $('.welcome_slides');

// :: 2.0 Welcome Slider Active Code
if ($.fn.owlCarousel) {
    welcomeSlide.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 1000
    });
}

welcomeSlide.on('translate.owl.carousel', function () {
  var slideLayer = $("[data-animation]");
  slideLayer.each(function () {
      var anim_name = $(this).data('animation');
      $(this).removeClass('animated ' + anim_name).css('opacity', '0');
  });
});

welcomeSlide.on('translated.owl.carousel', function () {
  var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
  slideLayer.each(function () {
      var anim_name = $(this).data('animation');
      $(this).addClass('animated ' + anim_name).css('opacity', '1');
  });
});

$("[data-delay]").each(function () {
  var anim_del = $(this).data('delay');
  $(this).css('animation-delay', anim_del);
});

$("[data-duration]").each(function () {
  var anim_dur = $(this).data('duration');
  $(this).css('animation-duration', anim_dur);
});