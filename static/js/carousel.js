$(document).ready(function () {
    $('.carousel-description').fadeOut();
    $('.carousel-description').delay(700).fadeIn(1000);

    var toggleAffix = function (affixElement, scrollElement, wrapper) {

        var height = affixElement.outerHeight(),
            top = wrapper.offset().top;

        if (scrollElement.scrollTop() >= top || $(window).width() < 370) {
            wrapper.height(height);
            affixElement.addClass("affix");
            $("#logo").css("height", "55px");
            $("#logo").css("margin", "-15px");
            $(".brand-name").css("top", "10px");
            $(".brand-name").css("font-size", "20px");
        } else {
            affixElement.removeClass("affix");
            wrapper.height('auto');
            $("#logo").css("height", "65px");
            $(".brand-name").css("top", "10px");
            $(".brand-name").css("font-size", "18px");


        }
    };


    $('[data-toggle="affix"]').each(function () {
        var ele = $(this),
            wrapper = $('<div></div>');

        ele.before(wrapper);
        $(window).on('scroll resize', function () {
            toggleAffix(ele, $(this), wrapper);
        });

        // init
        toggleAffix(ele, $(window), wrapper);
    });
});


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
    console.log('slide event!');

    $('.carousel-description').fadeOut();
    $('.carousel-description').delay(700).fadeIn(1000);
});
