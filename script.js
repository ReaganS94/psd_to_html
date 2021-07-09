$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
});

$(document).ready(function () {
    $('#top').click(function () {
        $('html, body').animate({scrollTop : 0}, 800);
    });
});