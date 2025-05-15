// Print all array elements appearing more than N / K times

function moreKtimes(arr, k) {

    let n = arr.length; 

    let result = [];

    let freqMap = new Map();

    for(let n of arr){
        freqMap.set(n, (freqMap.get(n) || 0) + 1)
    }

    for(let [key, val] of freqMap.entries()) {
        if(val > Math.floor(n/k)) {
            result.push(key);
        }
    }
    
    return result;
}

let arr = [3, 4, 4, 5, 5, 5, 5 ];

let k = 4;

console.log(moreKtimes(arr, k));