// Split the Array 

function splitArr (nums) {

    const freq = new Map();

    for(let n of nums) {
        freq.set(n, (freq.get(n) || 0) + 1);
        if(freq.get(n) > 2) return false;
    }

    return true;

}

let nums = [1,1,2,2,3,4];

console.log(splitArr(nums));

