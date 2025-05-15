// Subarray with Given Sum

function Subarray(arr, target) {

    let n = arr.length;
    let start = 0;
    let curr = 0;

    for(let end = 0; end < n; end++) {

        curr += arr[end]; 

        while(curr > target && start < end ) {
            curr -= arr[start];
            start++
        }


        if(curr === target) {
            return [start + 1, end + 1];
        }
    }

    return [-1];

}



let arr = [1, 10, 4, 0, 3, 5]; // Output: [3, 5]
let target = 7;  

console.log(Subarray(arr, target)); 