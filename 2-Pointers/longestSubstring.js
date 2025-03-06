// Longest Substring without repeating character - using 2-pointer & Sliding window approch

function longestSubstring(str) {

    let charIndex = new Map();

    let longest = 0, left = 0;
    let n = str.length;

    for(let right = 0; right < n; right++) {
        if(charIndex.has(str[right])) {
            left = Math.max(left, charIndex.get(str[right]) + 1);
        }

        charIndex.set(str[right], right);

        longest = Math.max(longest, right - left + 1)
    }

    return longest;

}

str = "abcabcbb";

console.log(longestSubstring(str)); // output = 3


//My Solution Complexity
//Time Complexity: O(n) 
//Space Complexity: O(1) 