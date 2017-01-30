var readlinSync = require("readline-sync");

var item = [ "dog", "cat", "monkey"];

var player = function( name, health){
    this.name = name ;
    this.health = health;
    this .addItem = function(item){
        this.inv.push(item)
    }
}
var Enemy = function(name, health, attack) {
  this.name = name;
  this.health = health;
  this.attack = attack;
}

console.log("Hello how are you suckers I dont understand what Haithaim said");