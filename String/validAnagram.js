// Check if 2 String are anagram or not. 

function validAnagram(str1, str2){

    if(str1.length !== str2.length) return false;

    let count = {};

    for(let i = 0; i < str1.length; i++){
        let char = str1[i];

        if(count[char] === undefined){
            count[char] = 1;
        }
        else {
            count[char]++;
        }
    }


    for(let i = 0; i < str2.length; i++){
        let char = str2[i];

        if(count[char] === undefined) return false;

        count[char]--;

        if(count[char] < 0 ) return false;
 
    }

    return true;
}

console.log(validAnagram("listen", "silent")); // true
console.log(validAnagram("rat", "tar"));       // true
console.log(validAnagram("hello", "helloo"));  // false


//My Solution Complexity
//Time Complexity: O(n) - str1, str2 loops run sequentially, TS = O(N) + O(N) = O(N).
//Space Complexity: 𝑂(1) - we store at most 26 characters.


//JavaScript Pre-Define Methods for checking if 2 String are anagram or not. 
// let result = str1.split("").sort().join("") === str2.split("").sort().join("");
// console.log(result);