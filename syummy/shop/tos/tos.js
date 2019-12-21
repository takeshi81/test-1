

function clickBtn1(){
	const page2 = document.getElementById("page2");

	if(page2.style.display=="block"){
		// noneで非表示
		page2.style.display ="none";
	}else{
		// blockで表示
		page2.style.display ="block";
	}
}
$(function(){
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').hide();

    $('.to-page1').on('click',function(){
        $('#page1').show();
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
});