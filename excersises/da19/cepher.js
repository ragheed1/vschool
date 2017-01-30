var ask = require('readline-sync');  
var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(ask.question('How many letters would you like to shift? '));  

 function CaesarCipher(str, offset){  
  var charArray = str.split('');

 function shiftChar(char){
    var isAlpha = /[a-z]/i;

   if(isAlpha.test(char)){
      char = String.fromCharCode(char.charCodeAt(0) + offset);
      if(char > 'Z' && char < 'a' || char > 'z')
        char = String.fromCharCode(char.charCodeAt(0) - 26);
    }
    return char;
  }

 var result = charArray.map( shiftChar ).join('');  

 return result;
}

console.log(CaesarCipher( "test", 2));