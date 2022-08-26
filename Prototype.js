/*var xyz = {
    Name : "Vamshi",
    Address : "Hyderabad",
    Subject : "Java",
}

console.log(xyz);
*/
/*
function xyz(Name,Address,Subject)
{
    this.Name = Name;
    this.Address  = Address;
    this.Subject = Subject;
}

x1 = new xyz("Vamshi","Hyderabd","Java");
xyz.prototype.getName = function()
{
    return this.Name;
}
xyz.prototype.getAddress = function()
{
    return this.Address;
}
console.log(x1);
*/
//prototypal inheritence in javascript
/*
const employee = {
    post  : function(){
        return "A software devoloper";
    },
    changeName : function(name){
        this.name = name;
    }
};

var e1 = Object.create(employee);
e1.name = "vamshi";
e1.role = 'programmer';
e1.changeName("chintu");
console.log(e1);

var e2 = Object.create(employee,{
    name : {value : "kishore", writable:true},
    role : {value : "web devoloper"},
})
console.log(e2);*/

//inheritence in prototypal
function employee(name,id,salary)
{
    this.name = name;
    this.id= id;
    this.salary = salary;
}
employee.prototype.post = function()
{
    return (this.name + " is a content creator");
}
varun = new employee("varun", 12,10000);
console.log(varun);

function programmer(name, id, salary,language){
    employee.call(this,name,id,salary);
    this.language = language;
}
var kaushal = new programmer("kaushal",15,15000,'java');
console.log(kaushal);
// bcgcf