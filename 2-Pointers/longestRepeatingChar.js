// Longest Repeating Character Replacement.

function maxChar(s, k) {

    let n = s.length, l = 0, maxlen = 0, count = 0;

    let freq = new Array(20).fill(0);

    for(let r = 0; r < n; r++) {
        const index = s.charCodeAt(r) - 65;
        freq[index]++;
    

    count = Math.max(count, freq[index]);

    if(r - l + 1 - count > k) {
        freq[s.charCodeAt(l) - 65]--;
        l++;
    }

    maxlen = Math.max(maxlen, r - l + 1);

    }

    return maxlen;

}

s = "AABABBA";

k = 2;

console.log(maxChar(s,k));