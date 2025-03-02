// Find the pair of index who's sum is equal to the given Target.

function twoSum(arr, target) {

    let numMap = {};

    for(let i = 0; i < arr.length; i++){

        let complete = target - arr[i];

        if(numMap[complete] !== undefined) {
            return [numMap[complete], i];
        }

        numMap[arr[i]] = i;
    }

    return null;
}

arr = [2,4,6,1,7];
target = 9;

console.log(twoSum(arr, target)); // [ 0, 4 ]

//My Solution Complexity
//Time Complexity: O(n) - where n is the length of the arrays.
//Space Complexity: 𝑂(n) - Dictionary will store all n numbers from the array. Therefore, the space complexity is proportional to the size of the input array.


//JavaScript Pre-Define Methods for checking pair of index who's sum is equal to the given Target.