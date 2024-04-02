$(".btn1").click(function(){
    $(".popup").addClass("open-popup");
    $(this).hide();
    $(".btn2").addClass("btn2after");
    $(".btn3").addClass("btn3after");
    $(".char").addClass("charafter");
    $(".char1").addClass("charshow");
});

$(".btn2").click(function(){
    $(".popup").addClass("open-popup");
    $(this).hide();
    $(".btn1").addClass("btn1after");
    $(".btn3").addClass("btn3after");
    $(".char").addClass("charafter");
    $(".char2").addClass("charshow");
});

$(".btn3").click(function(){
    $(".popup").addClass("open-popup");
    $(this).hide();
    $(".btn1").addClass("btn1after");
    $(".btn2").addClass("btn2after");
    $(".char").addClass("charafter");
    $(".char3").addClass("charshow");
});

$(".popup button").click(function(){
    $(".popup").removeClass("open-popup");
    $(".basket").addClass("chosenbasket");
    $(".popup1").addClass("open-popup1");
    $(".farm").addClass("farmafter");
    $(".berry").addClass("berryafter");
    $(".berry1").addClass("berryafter");
    $(".berry2").addClass("berryafter");
    $(".berry3").addClass("berryafter");
    $(".berry4").addClass("berryafter");
    $(".berry5").addClass("berryafter");
    $(".berry6").addClass("berryafter");
    $(".berry7").addClass("berryafter");
    $(".berry8").addClass("berryafter");
    $(".berry9").addClass("berryafter");
 });

 $(".popup1 button").click(function(){
    $(".popup1").removeClass("open-popup1");
    $(".farm").removeClassClass("farmafter");
    $(".berry").removeClass("berryafter");
    $(".berry1").removeClass("berryafter");
    $(".popup2").addClass("open-popup2");
}
);

 $( function() {
    $( ".draggable" ).draggable();
 } );
