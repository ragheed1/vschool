  function random (min ,max){
      
    
    return Math.floor(Math.random() * (max -min +1)+min);
}
function rand(){

var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz@$#&*#@!#*^%%$&";
    

        var string_length = 8;
        var randomstring = ''; 
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
          var x= random();
            if(randomstring){
           $("#res").val(randomstring);
            }
            }
        }