// Group Anagram

function groupAnagram(arr) {

    let sortedArr = arr.map((arr) => arr.split('').sort().join(''));

    let mapObj = {};

    for(let i = 0; i < sortedArr.length; i++) {
        
        if(!mapObj[sortedArr[i]]) {
            mapObj[sortedArr[i]] = [arr[i]];
        }
            
        else mapObj[sortedArr[i]].push(arr[i]);

    }

    return Object.values(mapObj);
}

arr = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagram(arr)); // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]



//Time Complexity: 
//Space Complexity: