var employees = [];
function Employee( name, jobTitle, salary, status ) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "Full Time";
    this.printEmployeeForm = function() {
        console.log("Name="+this.name+" Job Title= "+this.jobTitle +" Salary= "+this.salary+"Status "+this.status);
    }
}
for ( var j=0,j<3,j++){
    var employee=
}
employees.push( new Employee("hiba","it officer",111111,"Contract") );
employees.push( new Employee("ola","administrator",900,"Part Time") );
employees.push( new Employee("sara","Teacher",800) );

for( var i=0; i<employees.length; i++ ) {
    employees[i].printEmployeeForm();