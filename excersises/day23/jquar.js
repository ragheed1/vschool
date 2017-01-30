counter = 0;
var ourInterval = setInterval(function() {
  if(counter >= 10) {
    clearInterval(ourInterval);
  }
  console.log("I have waited one second " + counter);
  counter++;
},1000);

console.log("And going and going");