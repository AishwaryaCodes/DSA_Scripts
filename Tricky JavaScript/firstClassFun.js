// first class fun

const greet = function(name) {
    return `Hello, ${name}`;
};

function processUserInput(callback) {
    const name = "Jon";
    console.log(callback(name));
}

processUserInput(greet);

function mul(factor) {
    return function(n) {
        return n * factor
    };
}

const double = mul(2);
console.log(double(5));

console.log("************************");

function sayHi() {
    return "Hi";
}

sayHi.language = "English";

console.log(sayHi.language);

console.log("************************");

function outer() {
    return function inner() {
        return "Inner Fun";
    };
}

const func = outer();
console.log(typeof func);
console.log(func());


console.log("************************");

const arr = [
    function() { return "first"; },
    function() { return "second"; }
];

console.log(arr[0]());
console.log(arr[1]());

console.log("************************");

function execute(fn) {
    return fn();
}

console.log(execute(function() { return 42; }));
console.log(execute(() => "Arrow Function"));