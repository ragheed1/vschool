var Mario = function(name, totalCoins, status,star) {
  this.name = "";
  this.totalCoins = 0;
  this.status = ["power up","big","small","dead"];
    
  this.star = star ;
    
   this.setName = function() {
    console.log("i can see the name " + this.mario + " here is the name ");
  };
  this.totalCoins  = function(coins) {
    console.log("mario has this" + coins+ " " + " in the " + this.name + " " + this.status + " status" + this.star + " ");
  }
}

var oldMario = new Mario("bekash", 500, "live", 20);
oldMario.totalCoins();
oldMario.status();
oldMario.star();

for(var i = 0 ; i)