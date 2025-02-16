// Merge 2 Array's. 

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let merged = [];

// Merge arr1 into merged array
for (let i = 0; i < arr1.length; i++) {
    merged[i] = arr1[i];
}

// Merge arr2 into merged array
for (let i = 0; i < arr2.length; i++) {
    merged[arr1.length + i] = arr2[i];
}

console.log(merged);  // Output: [1, 2, 3, 4, 5, 6]

//My Solution Complexity
//Time Complexity: O(m + n) - 2 loops iterates over arr1, arr2 of size m,n time.
//Space Complexity:O(m + n) - new array merged of size (m + n) is created, which requires extra space.


//JavaScript Pre-Define Methods for Merging 2 Array
//Solution 1
//let merged = arr1.concat(arr2);

//Solution 2 
//let merged = [...arr1, ...arr2]; 
