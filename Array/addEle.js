// Add Element in an Array at a Specific Position.

let data = [1, 2, 4, 5, 6, 7, 8]; 
console.log("Original Array:", data);

let addNew = 3;  // Element to add
let position = 2; // Position to insert at

// Shift elements to the right
for (let i = data.length - 1; i >= position; i--) {
    data[i + 1] = data[i]; // Shift element to the right
    if (i === position) {
        data[i] = addNew; // Insert new element at the given position
    }
}

console.log("Updated Array:", data);

//My Solution Complexity
//Time Complexity: O(n) - where n is the number of elements in the array.
//Space Complexity: O(1) - Algorithm does not use any extra space.


//JavaScript Pre-Define Methods for Adding Element in an Array at a Specific Position.
//data.splice(position, 0, addNew); 
//console.log("Updated Array:", data);
