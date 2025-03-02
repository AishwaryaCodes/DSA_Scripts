// Array Methods

const arr = ["apple", "banana", "cherry", "mango", "orange"];

// Array.includes()
console.log(arr.includes("mango")); //true
console.log(arr.includes("pink")); //false

// Array entries()
const entriesIterator = arr.entries();
console.log(entriesIterator.next().value); // [ 0, 'apple' ]
console.log(entriesIterator.next().value); // [ 1, 'banana' ]

// Array.from()
const str = "hello";
const arrFromString = Array.from(str);
console.log(arrFromString); // [ 'h', 'e', 'l', 'l', 'o' ]

// Array.find()
const foundElm = arr.find(item => item.startsWith("man"));
const foundElm2 = arr.find(item => item.endsWith("e"));
console.log(foundElm); // mango
console.log(foundElm2); // apple - This will only return apple and not orange, because it returns the first element in the array that satisfies the condition. 

// Array.filter()
const foundAll = arr.filter(item => item.endsWith("e"));
console.log(foundAll) // [ 'apple', 'orange' ] - This will give you all emenets in array which end with 'e'.

// Array keys()
const keysIterator = arr.keys();
console.log(keysIterator.next().value); // 0 - index of 1st element in array.
console.log(keysIterator.next().value); // 1 - index of 2nd element in Array.

// Array findIndex()
console.log("Index of Cherry " + arr.findIndex(item => item === "cherry")); // findIndex() expects a callback function.

// Array map method
const myList = arr.map((i) => [i])
console.log(myList)