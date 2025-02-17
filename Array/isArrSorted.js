// Check if Array is sorted.

function isArraySorted(arr) {

    for(let i = 1; i < arr.length; i++) {

        if(arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true; 
}

arr = [2,4,6,8, 9, 3];

console.log(isArraySorted(arr));


//My Solution Complexity
//Time Complexity: O(n) - where n is the length of the arrays.
//Space Complexity: 𝑂(1) - Algorithm does not use any extra space.


//JavaScript Pre-Define Methods for checking if array is sorted. 
// let result = arr.every((val, index, array) => index === 0 || array[index - 1] <= val);
// console.log(result); 