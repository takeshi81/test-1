$(function(){
   
    var wH = $(window).height();
    var wHNavFrontBack = wH * 225/1000;
    var wHWineBack = wH * 11/20;
    $('body').css('height',wH+ 'px');
    $('.navbar').css('height',wHNavFrontBack +'px');
    $('.bottle-saport').css('height',wHWineBack +'px');
   
    $('.pic-camera').css('height',wHWineBack +'px');
    $('.wine-cover-img').css('height',wH+'px');
  
    $(window).on('resize',function(){
        var wH = $(window).height();
        var wHNavFrontBack = wH * 225/1000;
    var wHWineBack = wH * 11/20;
        $('body').css('height',wH+ 'px');
        $('.navbar').css('height',wHNavFrontBack +'px');
        $('.bottle-saport').css('height',wHWineBack +'px');
        
        $('.pic-camera').css('height',wHWineBack +'px');
        $('.wine-cover-img').css('height',wH+'px');
      
    });
})
