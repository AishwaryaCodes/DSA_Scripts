// Binary Search Implementation with Iterative Method. 

function binarySearchIterative(arr, target) {

    let n = arr.length - 1;
    let low = 0; 
    let high = n;

    while(low <= high){
        let mid = Math.floor(low + (high - low)/2);
        if(arr[mid] === target) return mid;
        else if(target > arr[mid]) low = mid + 1; 
        else high = mid - 1;
    }

    return -1; 

}

arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

console.log(binarySearchIterative(arr, 23));


//Time Complexity: O(log N)  - where n is the number of elements in the array.
//Space Complexity: O(1) - Algorithm does not use any extra space.
