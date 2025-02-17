//Print the Large Element from the Array.

function largeElement(arr) {
    let large = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > large) {
            large = arr[i];
        }
    }
    return large;
}

arr = [3,6,4,8];

console.log(largeElement(arr)); 


//My Solution Complexity
//Time Complexity: O(n) - where n is the length of the arrays.
//Space Complexity: 𝑂(1) - Algorithm does not use any extra space


//JavaScript Pre-Define Methods for printing large element in Array. 
//const largest = Math.max(...arr);
//console.log(largest); 