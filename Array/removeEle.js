let data = [1, 2, 4, 5, 6, 7, 8];      
let position = 2;  // Index of the element to be removed (4)

for (let i = position; i < data.length - 1; i++) {   
    data[i] = data[i + 1];  // Shift elements to the left
}

data.length = data.length - 1;  // Reduce the array length to remove the last element
console.log(data);  // Final array after removal



//JavaScript Pre-Define Methods for removing element from Array.
//let result = data.splice(position, 1);
//console.log("Updated array after removal:", data);  // [1, 2, 5, 6, 7, 8]
//console.log("Removed element:", result);  // [4]