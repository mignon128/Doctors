$(function() {
  $('.hamburger').click(function() {
     $(this).toggleClass('on');
     $('#gnb').toggleClass('on');
    });

    $(window).on('scroll',function(){
        if($(window).scrollTop() > 500){
            $('.hd-inner').addClass('open');
        }else{
            $('.hd-inner').removeClass('open');
        }
    });
  setTimeout(function() {
    var epFrame = $('.ellipse-frame');
    var frameBg = new Array;
    var dep1 = $('.gnb-menu-depth1');
    frameBg = $('.frame-bg');

    dep1.on('mouseenter', function() {
      var frameIdx = $(this).index();
      var dep1Idx = $(this).index();
      frameBg.stop().removeClass('active');
      epFrame.stop().removeClass('bg-none');
      dep1.stop().removeClass('on');

      frameBg.stop().eq(frameIdx).addClass('active');
      epFrame.stop().addClass('bg-none');
      dep1.stop().eq(dep1Idx).addClass('on');
    });
    dep1.on('mouseleave', function() {
      var frameIdx = $(this).index();
      var dep1Idx = $(this).index();
      frameBg.stop().removeClass('active');
      epFrame.stop().removeClass('bg-none');
      dep1.stop().removeClass('on');

      epFrame.stop().addClass('bg-none');
      frameBg.stop().eq(frameIdx).addClass('active');
      dep1.stop().eq(dep1Idx).addClass('on');
    });
  })
})
