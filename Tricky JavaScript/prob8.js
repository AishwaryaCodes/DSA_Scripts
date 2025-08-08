const a = new Number(10); // a is an object (Number object)
const b = 10;  // b is a primitive (number)
console.log(a === b); // False  

console.log("************************");

let user1 = {
    name: "jojo"
}

let user2 = {
    name: "jojo"
}

console.log(user1 === user2); // False user1, user2 are 2 different objects in memory. 

console.log("************************");

let m = "hey";
m[0] = "j";
console.log(m); // jey

let n = "jojo";
n = n + "smith";
console.log(n); // jojo smith

console.log("************************");

const user3 = {
    name: "aish",
    eat() {
        console.log(this); //  eat: [Function: eat]
        var eatFruit = function () {
            console.log(this); //
        };
        eatFruit();
    },
};

user3.eat();

console.log("************************");

let counter = 30;
if(counter === 30) {
    let counter = 31;
    console.log(counter);
}

console.log(counter);

console.log("************************");

function userDetails(username) {
    if(username) {
       // console.log(salary);
        //console.log(age);

        var salary = 1000;
        let age = 30;

        
    }
}

userDetails("AKUNDUR");

console.log("************************");


let count = 1;
switch (count) {
    case 0: {
        let name;
        break;
    }   
    case 1: { // if you dont use { } , then you will get error
        let name; // re-declanation in switch case.
        break;
    }
        
}


console.log("************************");

function someMethod() {
    //console.log("using let", m);  // Reference error
    console.log("using var", n );
    //console.log("using const", o); // Reference error

    let m = 1;
    var n = "good";
    const o = 1;

    console.log("using var", n );

};

someMethod();