// Minimum Window Substring 

// Sliding Window + Hash Map

function minSubStr(s, t) {

    let m = s.length;

    let n = t.length;

    if(n > m) return "";



    let hashMap = new Map();

    for(let c of t) {
        hashMap.set(c, (hashMap.get(c) || 0) + 1);
    }


    let left = 0, right = 0, count = hashMap.size;

    let minLen = Infinity, minStart = 0;



    let windowMap = new Map();


    while(right < m) {
        let char = s[right];
        windowMap.set(char, (windowMap.get(char) || 0) + 1);

        if(hashMap.has(char) && windowMap.get(char) === hashMap.get(char)) {
            count--;
        }

        while(count === 0) {
            if(right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }

            let leftChar = s[left];
            windowMap.set(leftChar, windowMap.get(leftChar) - 1);

            if(hashMap.has(leftChar) && windowMap.get(leftChar) < hashMap.get(leftChar)) count++;

            left++;
        }

        right++;

    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);


}

let  s = "ADOBECODEBANC";

let t = "ABC";

console.log(minSubStr(s, t));