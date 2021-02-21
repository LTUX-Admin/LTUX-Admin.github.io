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

    // this.checkTwitchStreaming();

});
function checkTwitchStreaming()
{
    var time = moment();

    var startDay = moment('2021-02-18');
    var endDay = moment('2021-02-22');

    if(!time.isBetween(startDay, endDay, null, '[]'))
        return;

    var twitchHolder = $('#twitch');
    var mainMasthead = $('#main-masthead');

    var format = 'HH:mm:ss';

    var startThurFriday = moment('18:55:00', format);
    var start = moment('11:00:00', format);
    var end = moment('22:00:00', format);

    if([6,7].indexOf(time.isoWeekday()) >= 0)
    {
        if(time.isBetween(start, end, null, '[]'))
        {
            twitchHolder.show();
            mainMasthead.hide();
        }
    }
    else
    {
        if(time.isBetween(startThurFriday, end, null, '[]'))
        {
            twitchHolder.show();
            mainMasthead.hide();
        }
    }

    if(twitchHolder.is(':visible'))
    {
        new Twitch.Embed("twitch-embed", {
            width:'100%',
            height:'100%',
            channel: "glgexpo",
            // only needed if your site is also embedded on embed.example.com and othersite.example.com
        });
    }

}

