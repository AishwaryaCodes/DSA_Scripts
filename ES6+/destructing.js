// Array & Object Destructing - Extract values from arrays and objects. 

//Array
const fruit = ["apple", "banana", "mango"]; 

// zero - apple 
// first - banana 
// seccond - mango 
// third , forth - undefined

const [zero, first, second, third, forth ] = fruit;

console.log(zero, first, third, forth);


//Object
const person = { 
    nameObj: 'aish',
    age: 30
};

const {nameObj, age} = person;

console.log(nameObj, age);

