// Maximum Subarray Sum – Kadane’s Algorithm 

function maxSubArrSum(arr) {

    let maxCurr = arr[0]; 
    let max = arr[0];

    for(let i = 1; i < arr.length; i++) {

        if(maxCurr + arr[i] > arr[i]) {
            maxCurr = maxCurr + arr[i];
        }
        else {
            maxCurr = arr[i]
        }

        if(maxCurr > max)  max = maxCurr;

    }  
    return max;
}

let arr = [2, 3, -8, 7, -1, 2, 3];

console.log(maxSubArrSum(arr)); // Output 11 ----  total of 7, -1, 2, 3 is max. 