//Remove Dublicates from Sorted Array. 

function removeDublicates(arr) {

    let i = 0;

    for(let j = 1; j < arr.length; j++){
        if(arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    arr.length = i + 1;
    return arr;
}

arr = [2,3,4,4,5,6,6];

console.log(removeDublicates(arr));

//My Solution Complexity
//Time Complexity: O(n) - where n is the length of the arrays.
//Space Complexity: 𝑂(1) - Algorithm does not use any extra space.


//JavaScript Pre-Define Methods for Removing Dublicates from Sorted Array. 
// let result = [...new Set(arr)];
// console.log(result); 