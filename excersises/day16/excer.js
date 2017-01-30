
$(document).hover(function() {
    $(this).css("background-color","blue");
});    

$(document).mousedown(function(){
    $(this).css("background-color","red");
    
});

$(document).mouseup(function(){
    $(this).css("background-color","yellow");
    
});
$(window).dblclick(function(){
    $(".yellow").css("background-color","green");
    
});
$(window).scroll(function(){
    $(".yellow").css("background-color","black");
    
});
$(window).keypress(function(e){
    var code = e.keyCode;
    if(code == 114 || code == 82)
        {
$(".yellow").css("background-color","red");         }
});
