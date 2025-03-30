// Maximum Points You Can Obtain from Cards 

function maxPoints(arr, k) {

    let n = arr.length;

    let lsum = 0, rsum = 0;

    for(let i = 0; i < k; i++) {
        lsum +=arr[i];
    }

    let maxsum = lsum;

    for(let i = 1; i <= k; i++) {
        lsum -= arr[k - i];
        rsum += arr[n - i];
        maxsum = Math.max(maxsum, lsum + rsum)
    }

    return maxsum;
}

let arr = [1,2,3,4,5,6,1];
let k = 3;

console.log(maxPoints(arr,k));

