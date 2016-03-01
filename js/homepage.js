$(function(){

  var slideWidth = $('.slide').width(),
      position = 0,
      numSlides = $('.slide').size(),
      trayWidth = slideWidth * numSlides;

  $('.tray').width(trayWidth);

  function slide(target) {
    var distance = slideWidth * position;
    $(target).find('.tray').animate({right: distance}, 0);
  }

  $('.next').click(function (event) {
     event.preventDefault();
     var target = $(this).attr('href');
    if (position === numSlides - 1) {
      position = 0;
    } else {
      position += 1;
    }
    slide(target);
  });

  $('.prev').click(function () {
    event.preventDefault();
    var target = $(this).attr('href');
    if (position === 0) {
      position = numSlides - 1;
    } else {
      position -= 1;
    }
    slide(target);
  });

  $('.prev, .next').hide();

  $('.frame').hover(function () {
    $('.prev, .next').show();
  }, function() {
    $('.prev, .next').hide();
  });

  //drop menus

  $('nav li ul').hide().removeClass('fallback');
  $('nav li').hover(function () {
    $('ul', this).slideToggle(100);
  });

});