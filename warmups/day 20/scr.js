var Students = function (name, number, grade, result,birthday ){
    this.name= name ;
    this.number= number;
    this.garade= grade;
    this.result=result;
    this.birthday= new Date(birthday);
    this.age = function() {
        var date2 = Date.now() - this.birthday.getTime();
        var ageDate = new Date(date2);
        var birth = Math.abs(ageDate.getFullYear() - 1970);
        console.log(birth)
    }
    
}
var fff=[];
var st = new Students("omar",5858,[20,50,40],"passed","12-15-1960");
fff[1] = new Students("kmal",784897575,[20,96,89],"passed");
fff[2] = new Students("pepe",799455,[20,96,89],"passed");
fff[3] = new Students("mark",7847875,[20,88,89],"passed");
fff[4] = new Students("ahmad",7845575,[0,0,0],"failed");

st.age()