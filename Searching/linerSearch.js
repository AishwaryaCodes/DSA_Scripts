// Linear Search Implementation in JavaScript

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}

let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
let target = 23;

console.log(linearSearch(arr, target)); // Output: 5


// Time complexity: O(N)
// Space Complexity: O(1)