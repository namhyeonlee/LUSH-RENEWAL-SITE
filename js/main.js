$(function(){
    //banner 

    $(".bannerBtn>li").click(function(){
       const sNum = $(this).index();
     

        $(this).addClass("active")
        .siblings().removeClass("active");
        $(".mBanner>li").eq(sNum).fadeIn(1000)
        .siblings().fadeOut(1000);
    })
    
     $(window).scroll(function(){
        var yPos = $(window).scrollTop();
        console.log(yPos);
        //속도 조절
        var moveY = yPos *0.9;
        $(".visual").css("background-position", "center "+-moveY+"px");
    })
//nav ng 
    
    $(".bgClose").click(function(){
        $(".navBg").css("display", "none");
    })
    //product arrow
    
    $(".arrow>.left").click(function(){
     
        $(".product").stop().animate({
            marginLeft : 0+"%"

        },500)
      
        $(".scroll").stop().animate({
            left :0
        },500)
    })
    $(".arrow>.right").click(function(){
        $(".product").stop().animate({
            marginLeft : -100+"%"

        },500)
        $(".scroll").stop().animate({
            right :0
        },500)
        
    })
})