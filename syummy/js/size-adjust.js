$(function(){
   
    var wH = $(window).height();
    wH *= 4/5;
    $('.bottle-saport').css('height',wH+'px');
    $('#camera').css('height',wH+'px');
    $(window).on('resize',function(){
        var wH = $(window).height();
        wH *= 4/5;
        $('.bottle-saport').css('height',wH+'px');
        $('#camera').css('height',wH+'px');
    });
})