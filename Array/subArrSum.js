// Return Sub-array, whose total sum = target 

function subArrSum(arr, target) {

    let sum = 0;
    let start = 0;

    for(let end = 0; end < arr.length; end++) {

        sum += arr[end];

    while(sum > target && start <= end) {
       sum -= arr[start]  // Remove the leftmost element
       start++;
    }


    if(sum === target)  {
        return [start, end];
    }

}

return [];

}

arr = [15, 2, 4, 8, 9, 5, 10, 23];

console.log(subArrSum(arr, 23) ) // Output: [1, 4]
//Explanation: Sum of subarray arr[2…5] is 2 + 4 + 8 + 9 = 23.