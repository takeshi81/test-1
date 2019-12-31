$(function(){
   
    var wH = $(window).height();
    var wHCameraCover = wH * 4/5;
    var wHNavFrontBack = wH * 225/1000;
    var wHWineBack = wH * 11/20;
    var wHBtnTop = wH*1/10;



    $('body').css('height',wH+ 'px');
    //top画面のボタン
    $('.btn-top').css('height',wHBtnTop +'px');
    $('.top-title-text').css('margin-top',wH*1/10 +'px');
    $('.user-regi-titel').css('margin-top',wH*1/10 +'px');
    $('.home-login-form').css('margin-top',wH*1/10 +'px');


    //撮影画面
    $('.navbar').css('height',wHNavFrontBack +'px');
    $('.bottle-saport').css('height',wHWineBack +'px');
    $('.bottle-saport-cover').css('height',wHCameraCover +'px');
    $('.pic-camera').css('height',wHWineBack +'px');
    $('.pic-camera-cover').css('height',wHCameraCover +'px');

  
    $(window).on('resize',function(){
        var wH = $(window).height();
        var wHCameraCover = wH * 4/5;
        var wHNavFrontBack = wH * 225/1000;
        var wHWineBack = wH * 11/20;
        var wHBtnTop = wH*1/10;
    
    
    
        $('body').css('height',wH+ 'px');
        //top画面のボタン
        $('.btn-top').css('height',wHBtnTop +'px');
        $('.top-title-text').css('margin-top',wH*1/10 +'px');
        $('.user-regi-titel').css('margin-top',wH*1/10 +'px');
        $('.home-login-form').css('margin-top',wH*1/10 +'px');

       
        //撮影画面
        $('.navbar').css('height',wHNavFrontBack +'px');
        $('.bottle-saport').css('height',wHWineBack +'px');
        $('.bottle-saport-cover').css('height',wHCameraCover +'px');
        $('.pic-camera').css('height',wHWineBack +'px');
        $('.pic-camera-cover').css('height',wHCameraCover +'px');
    
      
    });
})
