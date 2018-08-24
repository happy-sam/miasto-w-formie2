$(document).ready(function(){

    $.fn.rotate = function(options){

        //éťčŽ¤ĺź
        var defaults = {
            speed:10,
            width:"900px",
            slide1:".slide1"
        }
        var options = $.extend(defaults, options);

        this.each(function(){
            var thisR = $(this),
                thisC = thisR.children();
            thisR.append('<a href="javascript:;" class="rotate-prev">Prev</a>');
            thisC.append('<ul class="slide2">'+ $(options.slide1).html() +'</ul>');
            thisR.css({'overflow':'hidden','width':options.width});
            thisC.css('width','12000px').children().css('float','left');
            function Marquee(){
                if(thisR.scrollLeft() >= $(options.slide1).width()){
                    thisR.scrollLeft(0);
                }else{
                    thisR.scrollLeft(thisR.scrollLeft()+1);
                }
            }
            var sliding=setInterval(Marquee,options.speed);
            thisR.hover(function() {
                //éź ć ç§ťĺ¨DIVä¸ĺć­˘
                clearInterval(sliding);
            },function(){
                //çŚťĺźçť§çť­č°ç¨
                sliding=setInterval(Marquee,options.speed);
            });
        });
    }});        