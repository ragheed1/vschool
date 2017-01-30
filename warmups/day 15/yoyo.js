var cars = [];
function Car ( color , model , miles ){
this.color= color;
this.model= model;
this.miles= miles;
this.attributes= attrubutes || "good" ;
this.run = function(){
    console.log("color"+this.color+"model"+this.model+"mile"+this.miles+"is running")
}

};

}
    cars.push (new Car("red","bmw",18 ));
    cars.push (new Car("yellow","mazda",90 ));
    cars.push (new Car("blue","merceds",180));
    
    
    for( var i=0; i<3 ; i++ ) {
   Cars[i].run();
    
    }