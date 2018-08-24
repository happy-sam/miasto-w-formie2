$(document).ready(function(){
    
    
//    $(".col3-inside").hover(function(){
//        $(this).find('.news-hidden')
//        $(".news-hidden").fadeTo().css("opacity", "1"),
//        $(".news-hidden").fadeOut().css("opacity", "0");
//        
//    })
    
    
      $(".col3-inside").hover(function () {
        $(this).find('.news-hidden').show();        
        $(this).find('.news-hidden2').show();                  
    }, function () {
        $(this).find('.news-hidden').hide();        
        $(this).find('.news-hidden2').hide();        
    });
    
})