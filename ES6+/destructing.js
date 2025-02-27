// Array & Object Destructing - Extract values from arrays and objects. 

//Array
const fruit = ["apple", "banana", "mango"]; 

// zero - apple 
// first - banana 
// seccond - mango 
// third , forth - undefined

const [zeerow, first, second, , forth ] = fruit;

console.log(zeerow, first, forth);


//Object
const person = { 
    nameObj: 'aish',
    age: 30
};

const {nameObj, age} = person;

console.log(nameObj, age);


//Example 

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);

  console.log(calculate(4,7));