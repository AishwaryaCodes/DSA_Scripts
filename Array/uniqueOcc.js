// Unique Occurance of nums in array

function uniOcc(arr) {

    let freq = new Map();

    for(let n of arr) {
        freq.set(n, (freq.get(n) || 0) + 1);
    }

    let freqSet = new Set();

    for(let n of freq.values()) {
        if(freqSet.has(n)) return false;
        freqSet.add(n);
    }

    return true;

}

let arr = [1,2,2,1,1,3];

console.log(uniOcc(arr));  // true - 1 has 3 occurrences, 