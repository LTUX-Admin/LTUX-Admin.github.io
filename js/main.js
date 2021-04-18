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
    $('.clock').countdown('2021/02/18', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<span>%D</span> days '));
    });
    $('.shuffle').shuffleChildren();

    this.checkTwitchStreaming();
});

