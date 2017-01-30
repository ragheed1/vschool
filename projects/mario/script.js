


$("#resultBtn").click(function() {
    var nb1= $("#nb1").val();
    $("#nb2").val(Number(nb1) * 6);
})

$("#resultBtn1").click(function() {
    var nb3= $("#nb3").val();
    $("#nb4").val(Number(nb3) * 2 );
    
})
$("#resultBtn2").click(function() {
    var nb5= $("#nb5").val();
    $("#nb6").val(Number(nb5) *4);
})

$("#resultBtn3").click(function(){
    var nb2 = $("#nb2").val();
    var nb4 = $("#nb4").val();
    var nb6 = $("#nb6").val();
    $("#total").val(Number(nb2) + Number(nb4) +Number(nb6) );
})
                       
                       