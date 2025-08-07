// Pure Functions 
// Always return the same O/P for same I/P
// Has no side effects - Dont modify anything outside the scope
// Eg - No Global variable, no DOM manipulation, no API calls, etc
// Its used to test - just pass the I/P and check the return value.
function add(a,b) {
    return a + b;
}


// Impure Function
// Use and modify global count.
// side effect present
let count = 0;
function increment() {
    count++;
    return count;
}
// Impure Function - Because it has console.log, which is side effect.
function add(a,b) {
    return a + b;
    console.log("The input arguments are:", a, b);
}


//Arrow Function (ES6 2015)
//Short & Clean way to write Functions
//Dont have "this" , it inherits from outer scope
//Cannot be used with new - throw error
//great for callbacks
const welcome = () => console.log("Welcome Arrow Fun (ES6 2015)");
welcome();

//self-invoking / anonymous arrow function 
(() => console.log("self-invoking / anonymous arrow function"))();


//First Class Function
//Function are 1st class citizen - can be treated as any other variable
// 1.assign to variable,  
// 2.pass as argument to other funtion
// 3.return from other function
// 4.Store them in Data Structure
// First Class Function - Make Higer Order Function possible


// First Order Function 
const firstOrder = () => console.log("Function dont accept argument as functions or return a function as its return value.");
firstOrder();


// High Order Function
function greetUser (name) {
    return () => {
        console.log(`Hello, ${name}!`);
    };
}
const sayHello = greetUser("AISH"); // Accept's argument as functions or return a function as its return value.
sayHello();


//unary Function - accept 1 argument/parameter
const unaryFun = (a) => console.log(a + 5);  
unaryFun(5);


//currying Function - breaking a multi-argument funtion into chair of one-argument funtion
const multi = (a, b, c) => console.log(a + b + c);
multi(1,2,3); 

const curry_unary = (a) => (b) => (c) => console.log(a + b + c);
curry_unary(1)(2)(3);