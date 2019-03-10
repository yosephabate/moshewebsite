
$("#myCarousel").on("touchstart", function (event) {

    var yClick = event.originalEvent.touches[0].pageY;
    $(this).one("touchmove", function (event) {

        var yMove = event.originalEvent.touches[0].pageY;
        if (Math.floor(yClick - yMove) > 1) {
            $(".carousel").carousel('next');
        } else if (Math.floor(yClick - yMove) < -1) {
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function () {
        $(this).off("touchmove");
    });
});

$('#myCarousel').bind('slide.bs.carousel', function (e) {
    $('.carousel-description').fadeOut();
    $('.carousel-description').delay(700).fadeIn(1000);
});
