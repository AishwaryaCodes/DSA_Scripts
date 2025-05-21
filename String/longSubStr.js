//  Longest Substring Without Repeating Characters 

// Using Sliding Window + Set

function longSub(str) {

    let set = new Set();

    let left = 0;
    let maxLen = 0;

    for(let right = 0; right < str.length; right++) {

        while(set.has(str[right])){
            set.delete(str[left]);
            left++;
        }


        set.add(str[right]);

        maxLen =Math.max(maxLen, right - left + 1);
    }

    return maxLen;




}

let str = "abcabcbb"; 

console.log(longSub(str));

