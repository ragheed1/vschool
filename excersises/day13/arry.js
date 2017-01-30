var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  
var arryAlphabet = [];



for (var i=0; i<people.length; i++){
   arryAlphabet.push(people[i]);
    
    for(var j=0; j<alphabet.length;j++){
        arryAlphabet.push(alphabet[j]);
    
    }
}
console.log(arryAlphabet.join(", "));


 