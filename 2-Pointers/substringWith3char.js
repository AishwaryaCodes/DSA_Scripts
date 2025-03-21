// Number of Substrings Containing All Three Characters 

function threeCharSubstring(s) {

    const pos = [-1, -1, -1];  // positions of 'a', 'b', and 'c'

    let count = 0;

    for (let i = 0; i < s.length; i++) {

        const charIndex = s.charCodeAt(i) - 97; // 'a' → 0, 'b' → 1, 'c' → 2

        pos[charIndex] = i;


        if (pos[0] !== -1 && pos[1] !== -1 && pos[2] !== -1) {

            count += 1 + Math.min(pos[0], pos[1], pos[2]);

        }
    }

    return count;
}

const s = "abcabc";

console.log(threeCharSubstring(s));  // Output: 10
