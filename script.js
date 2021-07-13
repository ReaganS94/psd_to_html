$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
});

$(document).ready(function () {
    $('#top').click(function () {
        $('html, body').animate({scrollTop : 0}, 800);
    });
});

$('#play').click(function(){
    video = '<iframe src="'+ $(this).attr('data-video') +'" width="500px" height="315px" autoplay></iframe>';
    $(this).replaceWith(video);
});