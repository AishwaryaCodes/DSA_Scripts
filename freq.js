// Frequency of the Most Frequent Element
// two-pointer & Sliding window


function freqElement(arr, k) {
    arr.sort((a,b) => a - b);

    let l = 0;
    let t = 0;
    let maxFreq = 0;

    for(let r = 0; r < arr.length; r++) {
        t += arr[r];

        while((r - l + 1) * arr[r] - t > k) {
            t -= arr[l];
            l++;
        }

        maxFreq = Math.max(maxFreq, r - l + 1);
    }
    return  maxFreq;
}

let arr = [1,2,4], k = 5;

console.log(freqElement(arr,k));