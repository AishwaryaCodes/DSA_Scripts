// Slice Methos
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.slice(0, 5)); // [0, 1, 2, 3, 4 ]
console.log(arr.slice(5));  // [5, 6, 7, 8]

console.log(arr); // no change in ogi array

console.log("***********************")
//Splice Method
console.log(arr.splice(0, 5)); 
console.log(arr.splice(1)); 

console.log(arr); // changes the ogi arr

