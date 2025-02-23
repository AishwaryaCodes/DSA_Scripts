// Interpolation Search Implementation on Sorted Uniformly Distributed Array. 

function interpolationSearch(arr, target) {

    let low = 0;
    let high = arr.length - 1;

    while(low < high){

        let pos = low + Math.floor( (target - arr[low]) * (high - low) / (arr[high] - arr[low]) );
      
        if (arr[pos] === target) return pos;

        if (arr[pos] < target) low = pos + 1;
    
        else  high = pos - 1;

    }

    return -1;
}


arr = [2,4,6,8,10,12];

console.log(interpolationSearch(arr, 8));

// Time Complexity: O(log N) - Uniformly distributed data.
// Worst Case Time Complexity: O(N)
// Space Complexity: O(1)