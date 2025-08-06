//Arrow Functions

const add = (a, b) => a + b; // 2 parameter
const mul = a => a * 2; //single parament

const print = () => console.log("hello"); // no parameter

console.log(add(2, 3));
console.log(mul(2));
print();

console.log("*******************");

const obj = {
    name: "Jon",
    regFun: function () {
        console.log(this.name);
    },
    arrowFun: () => {console.log(this.name)}
};

obj.regFun(); //Jon
obj.arrowFun(); //undefined

console.log("*******************");

const Person = (name) => {
    this.name = name;
}
//const p = new Person("aish"); // arrow function can't be used a constructor

console.log("*******************");

const num = [1, 2, 3];
const res = num.map(n => n * 2); 
console.log(res); // [2, 4, 6]

console.log("*******************");

(() => {
    console.log(typeof arguments);
}) ();
