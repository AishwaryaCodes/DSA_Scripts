// Interpolation Search Recursive Implementation on Sorted Uniformly non-Distributed Array. 

function interpolationSearchRecursive(arr, low, high, target) {

    if(low > high) return -1;

    let pos = low + Math.floor( (target - arr[low]) * (high - low)  / (arr[high] - arr[low] ) );

    if(arr[pos] === target) return pos;

    else if (target > arr[pos]) return interpolationSearchRecursive(arr, pos + 1 , high, target);

    else return interpolationSearchRecursive(arr, low, pos - 1, target);
  
}

arr = [2, 5, 6, 7, 8, 12, 15, 16, 23, 38, 48, 56, 72, 91];

console.log(interpolationSearchRecursive(arr, 0, arr.length - 1, 16));


// Time Complexity: O(log N) - Uniformly Non-distributed data.
// Space Complexity: O(log N) - Using Recursion stack.
