// Are 2 Array's equal? 

function isArrEqual(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
     }
     return true;
}

console.log(isArrEqual([1,2,3], [1,2,3,4]));

//My Solution Complexity
//Time Complexity: O(n) - where n is the length of the arrays.
//Space Complexity: 𝑂(1) - Algorithm does not use any extra space.


//JavaScript Pre-Define Methods for checking if 2 array are euqal. 
// let result = arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
// console.log(result); 
