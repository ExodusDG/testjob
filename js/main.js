var bodyWidth = $('body').width();

/* HEADER ICONS CENTRING */
iconsCentring()

function iconsCentring() {
    var windowHeight = $(window).height();
    var iconsHeight = $('.fixed__icons').height()
    $('.fixed__icons').css('top', ((windowHeight - iconsHeight) / 2) + 'px')
}

$(window).resize(function() {
    iconsCentring()
});

/* IMAGE HOVER */

$('.company__images > img').hover(function() {
    currentSrc = $(this).attr('src');
    $(this).attr('src', currentSrc.replace('_black', ''))
}, function() {
    $(this).attr('src', currentSrc)

})

/* MOBILE MENU */

$('.hamburger').click(function() {
    $('.mobile__menu').css('left', '55vw');

    if (bodyWidth < 851 && bodyWidth > 492) {
        $('.mobile__menu').css('left', '35vw');
    }
    if (bodyWidth < 491) {
        $('.mobile__menu').css('left', '0vw');
    }
})
$('.button-close').click(function() {
    $('.mobile__menu').css('left', '100vw');
})