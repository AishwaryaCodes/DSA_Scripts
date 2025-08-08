var expOne = function funcOne() {
    console.log("Runs funs")
}
//funcOne(); //Reference error, funcOne is undefined , because the fun is assigned to variable

console.log("************************");

function sec() {
    var msg;
    console.log(msg); 
}

function first() {
    var msg = "first";
    sec(); // msg is undefined 

     console.log(msg); // msg is "first"
}

var msg = "default";

first(); 

console.log(msg); // msg is "de"

console.log("************************");

var curr = "newyork";

var changeCurr = function() {
    console.log("curr", curr); // undefined

    var curr = "chicago";
    console.log("curr", curr); // newyork
}

changeCurr();

console.log("************************");

funcMsg(); // This will print "Bye"

function funcMsg() {
    console.log("Hello");
}

function funcMsg() {
    console.log("bye"); // this will execute
}

console.log("************************");

console.log(n);  // undefined
//console.log(mfun());   // Reference error: message is not defined, bcoz mfun is in Immediately Invoked Function Expression 

var n = "aish";

(function mfun() {
    console.log("Hello Aish welcome")
});

console.log("************************");

setTimeout(() => {
    console.log("1")
}, 0);

Promise.resolve("hello").then(() => console.log("2"));

console.log("3");

console.log("************************");

const num = [11, 25, 31, 23, 33, 18, 200];

num.sort(); // JavaScript will sort it as a string , not nums 

console.log(num); // sp all 1's first , then 2's , 3's
// [11, 18, 200, 23, 25, 31, 33]

console.log("************************");

var of = ["of"];

for(var of of of) {
   console.log(of); // prints of 
}

console.log("************************");

console
.log("1st line");

[("a", "b", "c")].forEach((ele) => console.log(ele));

console.log("3rd line");

console.log("************************");

let quickPro = Promise.resolve()
quickPro.then(() => console.log("pro finished"));

console.log("Program Finished");


console.log("************************");

//getMsg(); // TypeError: getMsg is not a function

var getMsg = () => {
    console.log("hey");
}

console.log("************************");

let p = "good";

p.name = "night"; 

console.log("whats val", p.name); // undefined , bcoz p is string , not object

console.log("************************");

let zero = new Number(0);

if(zero) {
    console.log(zero);
    console.log("if"); // this will print
}
else {
    console.log("else");
}

console.log("************************");

console.log("whats the type finally ?", typeof typeof typeof true);

console.log( "smile" , "🙂" ===  "🙂")


console.log("************************");

const USER = { age: 26 };

USER.age = 25; // age will be updated

console.log("user's age", USER.age);


console.log("************************");

