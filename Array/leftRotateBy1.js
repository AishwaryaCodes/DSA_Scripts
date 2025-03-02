// Left Rotate Array by 1 element. 

function leftRotateArrByOne(arr) {
    let temp = arr[0];

    for(let i = 0; i < arr.length - 1; i++){

        arr[i] = arr [i + 1];
    }

    arr[arr.length - 1] = temp;

    return arr;
}

arr= [1,2,3,4];

console.log(leftRotateArrByOne(arr)); // [ 2, 3, 4, 1 ]

//My Solution Complexity
//Time Complexity: O(n) - where n is the length of the arrays.
//Space Complexity: 𝑂(1) - Algorithm does not use any extra space


//JavaScript Pre-Define Methods for Left Rotate Array by 1 element. 
//let temp = arr.shift();  // Removes the first element of the array and returns it
//arr.push(temp);
//console.log(arr);