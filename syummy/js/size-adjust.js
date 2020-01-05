$(function(){
   
    var wH = $(window).height();
    var wHCameraCover = wH * 4/5;
    var wHCameraImage = wH *  2/5;
    var wHWineBack = wH * 11/18;
    var wHBtnTop = wH*1/10;
    var wHCameraSize = wHWineBack;
    var wWCamera = 1/4 * 3 * wHCameraSize;
    var wWCameraCover = 1/4 * 3 * wHCameraCover;

    //pic-camera-cover
   
    //top画面のボタン
    $('.btn-top').css('height',wHBtnTop +'px');
    $('.top-title-text').css('margin-top',wH*1/10 +'px');
    $('.user-regi-titel').css('margin-top',wH*1/10 +'px');


    //撮影画面
   
    $('.camera-cover').css('height',wHCameraCover +'px');
    $('.camera-cover').css('width',wWCameraCover +'px');
    $('.bottle-saport-cover').css('height',wHCameraCover*3/4 +'px');
    $('.bottle-saport-cover').css('margin-top',75 +'px');
   
    $('.pic-camera').css('height',wHCameraSize +'px');
    $('.pic-camera').css('width',wWCamera +'px');
    $('.camera').css('height',wHCameraSize +'px');
    $('.camera').css('width',wWCamera +'px');
    $('.bottle-saport').css('height',wHCameraImage +'px');
   
    $('.pic-camera-cover').css('height', wHCameraCover+'px');
    $('.pic-camera-cover').css('width',wWCameraCover +'px');
    //navbarの高さを調整しない場合
    $('#navbar').css('height',60 +'px');

  
    $(window).on('resize',function(){
        var wH = $(window).height();
        var wHCameraCover = wH * 4/5;
        var wHCameraImage = wH *  2/5;
        var wHWineBack = wH * 11/18;
        var wHBtnTop = wH*1/10;
        var wHCameraSize = wHWineBack;
        var wWCamera = 1/4 * 4 * wHCameraSize;
        var wWCameraCover = 1/4 * 3 * wHCameraCover;
    
    
    
        
        //top画面のボタン
        $('.btn-top').css('height',wHBtnTop +'px');
        $('.top-title-text').css('margin-top',wH*1/10 +'px');
        $('.user-regi-titel').css('margin-top',wH*1/10 +'px');

       
        //撮影画面
        $('.camera-cover').css('height',wHCameraCover +'px');
        $('.camera-cover').css('width',wWCameraCover +'px');
        $('.bottle-saport-cover').css('height',wHCameraCover*3/4 +'px');
        $('.bottle-saport-cover').css('margin-top',75 +'px');
     
        $('.pic-camera').css('height',wHCameraSize +'px');
        $('.pic-camera').css('width',wWCamera +'px');
        $('.camera').css('height',wHCameraSize +'px');
        $('.camera').css('width',wWCamera +'px');
        $('.bottle-saport').css('height',wHCameraImage +'px');
       
        $('.pic-camera-cover').css('height',wHCameraCover +'px');
        $('.pic-camera-cover').css('width',wWCameraCover +'px');
        $('#navbar').css('height',60 +'px');
      
    });
})
