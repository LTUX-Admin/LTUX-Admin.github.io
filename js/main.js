$(document).ready(()=>{
    $('.clock').countdown('2021/02/18', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<span>%D</span> days '));
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $(".clearHeader").addClass("darkHeader");
        }
    });

});
