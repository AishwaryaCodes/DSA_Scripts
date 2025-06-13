// First Unique Character in a String

function uniqueChar(s) {

    let freqMap = new Map();

    for(let c of s) {
    freqMap.set(c, (freqMap.get(c) || 0) + 1);
    }


    for(let i = 0; i < s.length; i++) {
        if(freqMap.get(s[i]) === 1) return i;
    }

    return -1;
 
}

console.log(uniqueChar("lleetcode"));