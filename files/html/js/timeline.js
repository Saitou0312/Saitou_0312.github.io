function ScrollTimelineAnime() {
    $('.timeline li').each(function() {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var startPoint = 100;
        if (scroll >= elemPos - windowHeight - startPoint) {
            var H = $(this).outerHeight(true);
            var percent = (scroll + startPoint - elemPos) / (H / 2) * 100;
            if (percent > 100) {
                percent = 100;
            }
            $(this).children('.border-line').css({
                height: percent + "%",
            });
        }
    });
}

$(window).on('scroll', function() {
    ScrollTimelineAnime();
});

$(window).on('load', function() {
    ScrollTimelineAnime();
});
