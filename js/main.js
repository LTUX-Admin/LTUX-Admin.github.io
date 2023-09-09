$.fn.shuffleChildren = function() {
    $.each(this.get(), function(index, el) {
        var $el = $(el);
        var $find = $el.children();

        $find.sort(function() {
            return 0.5 - Math.random();
        });

        $el.empty();
        $find.appendTo($el);
    });
};
$(document).ready(()=>{

    new Splide( '.splide', {
        type:'loop',
        perPage:4,
        autoplay:true,
        cover:true,
        heightRatio: .5,
        fixedHeight:500,
        breakpoints:{
            1024: {
                perPage:3
            },
            640: {
                perPage:2
            },
            400: {
                perPage:1
            }
        }
    } ).mount();

    $('.clock').countdown('2024/04/27 10:00:00', function(event) {
        var $this = $(this).html(event.strftime('%D days till LTUX 2024!'));
    });
    $('.shuffle').shuffleChildren();

    this.checkTwitchStreaming();
});

