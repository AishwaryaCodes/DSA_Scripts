// Max consequitives Ones

function maxConsequitive(arr, k) {
    
    let len, left = 0, right = 0, zero = 0, maxLen = 0, n = arr.length;

    while(right < n) {
        if(arr[right] === 0) zero++;

        if(zero > k){
            if(arr[left] === 0) zero--;
            left++;
        } 

        if(zero <= k) {
            len = right - left + 1;
            maxLen = Math.max(len, maxLen);
        }
        right++;
    }
    return maxLen;
}

arr = [1,1,1,0,0,0,1,1,1,1,0];
k = 2;

console.log(maxConsequitive(arr, k));


//Time Complexity: O(n)
//Space Complexity: O(1) 