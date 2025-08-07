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