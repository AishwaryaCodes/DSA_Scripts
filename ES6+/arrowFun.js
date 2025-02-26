// Arrow Functions (=>) - Short syntax for writting functions.

const add = (a,b) => {
    return a + b;  
};
console.log(add(3, 5));

// Removed return keyword
const sum = (a,b) => a + b;
console.log(add(2, 2));


const person = {
    name: "Alice",
    sayHello: function () {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`); // this - refer to person
        },1000);
    },
};

person.sayHello();
