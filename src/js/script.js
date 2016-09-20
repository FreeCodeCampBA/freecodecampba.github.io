function scrollNav() {
    $('.nav a').click(function() {
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.' + theClass).parent('li').addClass('active');
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 160
        }, 500);
        return false;
    });
    $('.scrollTop a').scrollTop();
}

$(function() {
    scrollNav();
});