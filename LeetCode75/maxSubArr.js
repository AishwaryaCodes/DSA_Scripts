// Find Max Avg of sub-array

function maxSubArrAvg(arr, k) {

    let windowSum = 0;

    for(let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    for(let i = k; i < arr.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum/k;
}

let arr = [1,12,-5,-6,50,3], k = 4;

console.log(maxSubArrAvg(arr, k));