$(document).ready(function () {
    $(window).resize(function () {

        $('._pageWrap').css({
            position: 'absolute',
            left: ($(window).width() - $('._pageWrap').outerWidth()) / 2,
            top: ($(window).height() - $('._pageWrap').outerHeight()) / 2
        });

    });

    // To initially run the function:
    $(window).resize();
});