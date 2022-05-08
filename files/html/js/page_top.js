function PageTopCheck() {
    var winScrollTop = $(this).scrollTop();
    var secondTop = $('#area').offset().top - 150;
    if (winScrollTop >= secondTop) {
        $('.js-scroll').removeClass('scroll-view');
        $('.js-pagetop').addClass('scroll-view');
    } else {
        $('.js-scroll').addClass('scroll-view');
        $('.js-pagetop').removeClass('scroll-view');
    }
}

$('.scroll-top a').click(function() {
    var elmHash = $(this).attr('href');
    if (elmHash == 'area') {
        var pos = $(elmHash).offset().top;
        $('body, html').animate({
            scrollTop: pos
        }, pos, 'easeInOutQuint');
    } else {
        $('body, html').animate({
            scrollTop: 0
        }, 2000, 'easeInOutQuint');
    }
    return false;
});

$(window).scroll(function() {
    PageTopCheck();
});

$(window).on('load', function() {
    PageTopCheck();
});
