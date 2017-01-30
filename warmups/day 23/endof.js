 $("#start").click(function(){
     
     var ourInterval = setInterval(function() {
  var second=parseInt($("#second").val());
 var minutes=parseInt($("#minutes").val());
   var hour=parseInt($("#hour").val());
   
    second--;
  if(second <= 0 && minutes > 0) {
    minutes--;
      second =59;
  }
  else if (minutes <= 0 && hour > 0){
      hour--;
      minutes =59;
      
  }
    else if(second <= 0 && minutes <= 0 && hour <=0){
         $("#text").html("the end of the word ");
         clearInterval(timeInterval);
         
  }
   $("#hour").val(hour);
   $("#minutes").val(minutes);
   $("#second").val(second);

},1000);
 });

