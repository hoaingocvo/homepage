$(".btn1").click(function(){
    $(".popup").addClass("open-popup");
    $(this).hide();
    $(".btn2").addClass("btn2after");
    $(".btn3").addClass("btn3after");
});

$(".btn2").click(function(){
    $(".popup").addClass("open-popup");
    $(this).hide();
    $(".btn1").addClass("btn1after");
    $(".btn3").addClass("btn3after");
});

$(".btn3").click(function(){
    $(".popup").addClass("open-popup");
    $(".btn1").addClass("btn1after");
    $(".btn2").addClass("btn2after");
});

$(".popup button").click(function(){
    $(".popup").removeClass("open-popup");
    $(".basket").addClass("chosenbasket");
    $(".popup1").addClass("open-popup1");
 });

 $(".popup1 button").click(function(){
    $(".popup1").removeClass("open-popup1");
 });
 
 $( function() {
    $( ".draggable" ).draggable({ snap: true });
 } );
