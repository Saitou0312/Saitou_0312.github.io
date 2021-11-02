$('#box2').on('inview', function(event, isInView) {
    if (isInView) {
        $('#box2 .count-down').each(function() {
            $(this).prop('Counter', 500).animate({
                Counter: $(this).text()
            }, {
                duration: 6000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
});
