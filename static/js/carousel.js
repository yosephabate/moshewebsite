

// $(document).ready(function(){
//     var scrollTop = 0;
//     $(window).scroll(function(){
//         scrollTop = $(window).scrollTop();
//         $('.counter').html(scrollTop);
//
//         if (scrollTop >= 100) {
//             $('#global-nav').addClass('scrolled-nav');
//         } else if (scrollTop < 100) {
//             $('#global-nav').removeClass('scrolled-nav');
//         }
//
//     });
//
// });
//scroll slides on swipe for touch enabled devices

$("#myCarousel").on("touchstart", function(event){

    var yClick = event.originalEvent.touches[0].pageY;
    $(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
        $(this).off("touchmove");
    });
});
