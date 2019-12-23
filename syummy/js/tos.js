


$(function(){
    var helpCount = 0;
    $("#cancel-button-close").css("visibility","hidden");
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').hide();
   

    $('.to-page1').on('click',function(){
        $('#page1').fadeIn();
        $('#page2').hide();
        $('#page3').hide();
        $('#page4').hide();
        $('.pages').html('<p>1/4</p>')
        $('body,html').animate({ scrollTop: 0 }, 500);
        
    })
    $('.to-page2').on('click',function(){
        $('#page2').show();
        $('#page1').hide();
        $('#page3').hide();
        $('#page4').hide();
        $('.pages').html('<p>2/4</p>')
        $('body,html').animate({ scrollTop: 0 }, 500);
    })
    $('.to-page3').on('click',function(){
        $('#page1').hide();
        $('#page2').hide();
        $('#page4').hide();
        $('#page3').show();
        $('.pages').html('<p>3/4</p>')
        $('body,html').animate({ scrollTop: 0 }, 500);
    })
    $('.to-page4').on('click',function(){
        $('#page1').hide();
        $('#page2').hide();
        $('#page3').hide();
        $('#page4').show();
        $('.pages').html('<p>4/4</p>')
        $('body,html').animate({ scrollTop: 0 }, 500);
    })
    $('.close-btn').on('click',function(){
        $('#help-open').hide();
        $('.main-container').show();
    })
    $('.closeBtn').on('click',function(){
        if (helpCount != 0){
            $('#help-open').fadeOut(3000);
            $('.main-container').fadeIn(3000);
            helpCount = 0;
        } else{
            $(".cancel-button").css("visibility","hidden");
        }
    })
});