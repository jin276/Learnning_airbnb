$(function() {

  //--- Sticky3 ---//
  $('.header-container1').each(function() {
    let $window = $(window),
        $headerContainer = $(this),
        height = 53
        headerScroll = $headerContainer.offset().top;
    
    $window.on('scroll', function() {
      if ($window.scrollTop() > height) {
        $headerContainer.addClass('active');
        if ($window.scrollTop() > height + height) {
          $('header').addClass('current');
          $headerContainer.removeClass('active');
        } else {
          $('header').removeClass('current');
        }
      } else {
        $headerContainer.removeClass('active');
        $('header').removeClass('current');
      }
    });
    $window.trigger('scroll');
  });

  //--- Header 切替 ---//
  $(window).on('load resize', function() {
    let width = $(window).width(),
        line = 743;

    if (width < line) {
      $('.header-container1');
      $('header').removeClass('current');
    }
  });

});