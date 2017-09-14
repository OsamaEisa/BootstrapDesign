$(function () {
    
    "use strict";
    
    $('.carousel').carousel({
    
        interval: 5000
    
    });

// Show Color Option Div When Click On The Gear

$(".gear-check").click(function () {
    
    $(".color-option").fadeToggle();

    });

// Change Theme Color On Click
    
var colorLi = $(".color-option ul li");
    
colorLi
    .eq(0).css("backgroundColor", "#E41B17").end()
    .eq(1).css("backgroundColor", "#E426D5").end()
    .eq(2).css("backgroundColor", "#009AFF").end()
    .eq(3).css("backgroundColor", "#FFD500");
    
colorLi.click(function () {
    
    // console.log( $(this).attr("data-value") );
    
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    });

});

// Loading Screen

$(window).load(function () {
    "use strict";
    
    $(".loading-overlay h1 span")
    .fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).parent().parent().fadeOut(7000);
    $(".loading-overlay").fadeOut(7000);
    $("body").css("overflow", "auto");
    
    /*
    $(".loading-overlay .spinner").fadeOut(2000, function () {
        $(this).parent().fadeOut(2000);
         $("body").css("overflow", "auto");
    });
    
    */
});








