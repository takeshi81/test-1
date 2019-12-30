$(function(){
   
    var wH = $(window).height();
    var wHCameraCover = wH * 4/5;
    var wHNavFrontBack = wH * 225/1000;
    var wHWineBack = wH * 11/20;
    $('body').css('height',wH+ 'px');
    $('.navbar').css('height',wHNavFrontBack +'px');
    $('.bottle-saport').css('height',wHWineBack +'px');
    $('.bottle-saport-cover').css('height',wHCameraCover +'px');
    $('.pic-camera').css('height',wHWineBack +'px');
    $('.pic-camera-cover').css('height',wHCameraCover +'px');
   []
  
    $(window).on('resize',function(){
        var wH = $(window).height();
        var wHCameraCover = wH * 5/6;
        var wHNavFrontBack = wH * 225/1000;
        var wHWineBack = wH * 11/20;
        $('body').css('height',wH+ 'px');
        $('.navbar').css('height',wHNavFrontBack +'px');
        $('.bottle-saport').css('height',wHWineBack +'px');
        $('.bottle-saport-cover').css('height',wHCameraCover +'px');
        $('.pic-camera').css('height',wHWineBack +'px');
        $('.pic-camera-cover').css('height',wHCameraCover +'px');
     
      
    });
})
