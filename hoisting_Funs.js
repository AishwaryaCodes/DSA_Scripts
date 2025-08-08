// Function Declaration - Fully Hoisted
sayHello();  

function sayHello() {  //Both the name and body are loaded into memory during the creation phase. 
    console.log("Hello"); //so you can call them, before they're defined. 
}


console.log("************************");

// Function Expression with var (Hoisted but undefined)
sayHru(); //TypeError

var sayHru = function () { //Hoisted, but the variable name is set to undefined during creation phase.
    console.log("How are you");
}

console.log("************************");

// Function Expression with let or const (TDZ) Temporal Dead Zone
sayWru();  // if we used let  - ReferenceError

sayGn(); // if we used const  - ReferenceError

let sayWru = function () { //Hoisted, but the variable name is set to undefined during creation phase.
    console.log("Where are you");
}

const sayGn = function () { //Hoisted, but the variable name is set to undefined during creation phase.
    console.log("Good Night");
}