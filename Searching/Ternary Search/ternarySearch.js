// Ternary Search Recursive Implementation on Sorted Array. 

function ternarySearch(arr, low, high, target){

    if(low <= high) {

        let mid1 = low + Math.floor((high - low) / 3);
        let mid2 = high - Math.floor((high - low) / 3);


        if (arr[mid1] === target) return mid1;
        if (arr[mid2] === target) return mid2;

        if(target < arr[mid1]) return ternarySearch(arr, low, mid1 - 1, target);

        else if (target > arr[mid2]) return ternarySearch(arr, mid2 + 1, high, target);

        else return ternarySearch(arr, mid1 + 1, mid2 -1, target);
    }

    return -1; 

}


arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

console.log(ternarySearch(arr, 0, arr.length - 1, 23));



// Time Complexity: O(log₃N) - As it divides the array into 3 parts.
// Space Complexity: O(log₃N) - Recursive stack usage.