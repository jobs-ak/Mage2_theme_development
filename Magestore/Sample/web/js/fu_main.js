$(document).ready(function(){
    $(window).bind("resize", function(){
        if($("#slider").width() <= 480) {
            $("#slider img").attr('src', '/assets/images/slider/slide1_mobile.jpg');
        } else {
            $("#slider img").attr('src', '/assets/images/slider/slide1.jpg');
        }
    });        
});
