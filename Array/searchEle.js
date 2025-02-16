// Search Element in Array.

let data = [1, 2, 4, 5, 6, 7, 8, 4];      
let search = 4;

let index = undefined;

for (let i = 0; i < data.length; i++) { 
    if (data[i] === search) {
        index = i;
        break;  // Stop after finding the first occurrence
    }    
}

console.log(index);  // Output the index of the first occurrence of the search element


//JavaScript Pre-Define Methods for Searching Element in Array.
//let index = data.indexOf(search);
//console.log(index);