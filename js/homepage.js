$(function () {

  $('a.prev, a.next').hide();

  $(window).on('load', function(){
    var activeHeight = $('.slide.active').height();
    $('.portfolio').height(activeHeight);

    $('.portfolio').hover(function () {
      $(this).find('a.prev, a.next').show();
    }, function () {
      $(this).find('a.prev, a.next').hide();
    });
  });

  $(window).resize(function () {
    var activeHeight = $('.portfolio.active .slide.active').height();
    $('.portfolio').height(activeHeight);
  });

  $('nav a').click(function (event) {
    // event.preventDefault();
    var target = $(this).data('target');
    $('.portfolio').removeClass('active');
    $(target).addClass('active');
  });

  var portfolios = [];

  $('.portfolio').each(function (index, ele) {
   $(ele).data('eq', index);
   var portfolio = { 
     id: $(this).attr('id'),  
     activeSlide: 0, 
     numSlides: $(this).find('.slide').size()
   };
   portfolios.push(portfolio);
  });

  $('.portfolio a.next').click(function (event) {
    event.preventDefault();
    var eq = $(this).parent().data('eq');
    var portfolio = portfolios[eq];
    if (portfolio.activeSlide < portfolio.numSlides - 1) {
      portfolio.activeSlide += 1;
    } else {
      portfolio.activeSlide = 0;
    }
    $('#'+portfolio.id).find('.slide').removeClass('active');
    $('#'+portfolio.id).find('.slide').eq(portfolio.activeSlide).addClass('active');
  });

  $('.portfolio a.prev').click(function (event) {
    event.preventDefault();
    var eq = $(this).parent().data('eq');
    var portfolio = portfolios[eq];
    if (portfolio.activeSlide > 0) {
      portfolio.activeSlide -= 1;
    } else {
      portfolio.activeSlide = portfolio.numSlides - 1;
    }
    $('#'+portfolio.id).find('.slide').removeClass('active');
    $('#'+portfolio.id).find('.slide').eq(portfolio.activeSlide).addClass('active');
  });

});
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
