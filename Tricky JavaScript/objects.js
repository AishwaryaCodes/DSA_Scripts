//Object Literal
var obj = {
    name: "aish",
    age: 28
};
//console.log(obj);


//object Constructor 
var obj1 = new Object(); // creating empty object
var obj2 = Object();
// console.log(obj1);
// console.log(obj2);


//object create method
let vehicle = {
    wheel: '4',
    fuelType: 'Gas'
}
let carProps = {
    type: {
        value: "volkswagen",
        enumerable: true
    },
    mode: {
        value: 'Golf',
        enumerable: true
    }
}
var car = Object.create(vehicle, carProps)
//console.log(car.fuelType);


//Function constructor
function person(name) {
    this.name = name;
    this.age = 21;
}
var obj3 = new person("aish");
//console.log(obj3);


//Function constructor with prototype
function Person() {}

Person.prototype.name = "aish";
Person.prototype.age = 28;
var obj4 = new Person();
//console.log(Object.getPrototypeOf(obj4));


//Object assign method
const orgObj = { company: 'xyz corporate'};
const carObj = { name: 'toyota'};

const staff = Object.assign({}, orgObj, carObj);
//console.log(staff);


//ES6 class syntax
class People {
    constructor(name) {
        this.name = name;
    }
}
var obj5 = new People("aish");
//console.log(obj5);
  

//Singleton pattern
var obj6 = new (function (){
    this.name = "saurabh";
})();
//console.log(obj6.name);


//prototype chaining 
let gradParent = { surname: "kundur"};
let parent = Object.create(gradParent);
parent.hobby = "cooking";
let child = Object.create(parent);
child.name = "raj";
//console.log(child.surname,  child.name, child.hobby);


//Call, APPLY, BIND
var emp1 = {firstname: "Jon", lastname: "Smith"};
var emp2 = {firstname: "momo", lastname: "panda"};

function invite(greet1, greet2){
    console.log(greet1, this.firstname, this.lastname, greet2);
}

invite.call(emp1, "hello", "Hru?"); // CALL - run the function right now with a specific this and arguments.

invite.apply(emp2,["hey", "Wru"]); // APPLY - same as call but when your arguments are already in an array.

var inviteEmp1 = invite.bind(emp1); // Bind - create a reusable function with a fixed this (and optional arguments) for later calls.

inviteEmp1("hey", "Hru doing");



//JSON Operations
let jsonObj = {
    "name": "Jon",
    "age": 28,
    "skills": ["Java", "JavaScript"],
    "active": true
}

let jsonString = JSON.stringify(jsonObj);
console.log(jsonString);

let parseObj = JSON.parse(jsonString);
console.log(parseObj);