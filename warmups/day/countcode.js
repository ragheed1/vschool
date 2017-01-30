

function countCode(String){
    var counter = 0 

    for (var i=0; i<String.length; i++){
  if(String[i] === "c"&& String[i+1] ==="o" && String[i+3]==="e" ){
     counter = counter+1 
  }


}
    return counter
}


console.log(countCode("tgyhbjcodehkjhlkjlkcoreuygughukjcodeo"));