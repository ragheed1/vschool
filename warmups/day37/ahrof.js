var Person = function (name, age, status) {
    this.name= name || "noface";
    this. age= age || 0;
    this.status= status || "single";
    this.dance = function () {
        console.log(this.name + "go to the hell");

    }
}
var ahmad = new Person("ahmad", 32, "single");
var omar = new Person("omar", 44, "married");
console.log(ahmad.status);
console.log(omar.status);
omar.dance()