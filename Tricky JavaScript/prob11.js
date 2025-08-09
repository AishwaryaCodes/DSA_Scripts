function Person() {
    Person.prototype.walk = function () {
        return this;
    }
};

Person.run = function () {
    return this;
}


let user = new Person();

let walk = user.walk;
console.log(walk);

let run = Person.run;
console.log(run);


console.log("************************");

var car = new Vehicle("honda", "white");

console.log(car);

function Vehicle(model, color) {
    this.model = model,
    this.color = color;
}

console.log("************************");

function foo() {
    let x = (y = 0);  // y = 0 Number, and x will also get 0 , so x and y = 0
    x++; // it will become x = 1 
    y++;
    return x; // return 1
}

console.log(foo(), typeof x, typeof y); // your checking type of x = outside the fun , so its undefined 
                                        // but for y , its global score , because - it dont have let, const , var 
    

console.log("************************");
console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3); //false


console.log("************************");

let g = 1;
if(function f(){}) { // function expressions, its inside if()
    g += typeof f;
}
console.log(g);

function k(){} // Here the functions is declared outside 
let h = 1;
if (k) {
    h += typeof k;
}
console.log(h); 


console.log("************************");

function zoo () {
    return;
    { message: "Hello";  }
}
console.log(zoo()); 


console.log("************************");