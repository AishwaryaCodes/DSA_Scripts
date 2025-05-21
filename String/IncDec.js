// Increasing Decreasing String 
// zig-zag sort or increasing-decreasing pattern. 

function sort(s) {

    const freq = Array(26).fill(0);

    let result = "";
    let total = s.length;

    for(let c of s) {
        freq[c.charCodeAt(0) - 97]++;
    }

    while(result.length < total) {
        for(let i = 0; i < 26; i++){
            if(freq[i] > 0) {
                result += String.fromCharCode(i + 97);
                freq[i]--;
            }
        }

        for(let i = 25; i >= 0; i--) {
            if(freq[i] > 0) {
                result += String.fromCharCode(i + 97);
                freq[i]--;
            }
        }
    }

    return result;

}

let s =  "aaaabbbbcccc";

console.log(sort(s));