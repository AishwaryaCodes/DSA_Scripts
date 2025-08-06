function func(a, b = 2) {
    console.log(arguments.length);
}

func();
func(undefined); // there is only 1 parameter so 1
func(undefined, undefined, undefined); // 3 parameter, so the length is 3.


console.log("************************");
let arr = ["wöchentlich", "Woche", "wäre", "Wann"];  
// a - z  97 to 122
// A - Z 65 to 90
console.log(arr.sort());


console.log("************************");
//verify anagram
const verify = (s1, s2) => {
    return s1.split("").sort().join("") === s2.split("").sort().join("");
}
console.log(verify("tea", "eat"));


console.log("************************");
let a = [1, 2, 3, 4, 5, -6, 7];
a.length = 0;
console.log(a); // []


console.log("************************");
let k = 10;
if(true) {
    let k = 20;
    console.log(k, "inside"); // 20 inside
}
console.log(k, "outside"); // 10 outside


console.log("************************");
printHello(); // this will print hello
printMsg(); // error
function printHello() {
    console.log("Hello");

    function printMsg() {
        console.log("Good day");
    }
}