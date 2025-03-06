// Longest Consecutive Sequence. 

function longConsecutive(arr) {

    if(arr.length === 0) return 0;

    let arrSet = new Set(arr);

    let longest = 0;


    for(let n of arrSet) {
        if(!arrSet.has(n - 1)) {
            let currNum = n;
            let count = 1;
        
        while(arrSet.has(currNum + 1)) {
            currNum++;
            count++;
            }

        longest = Math.max(longest, count);
        }
    }

    return longest;
}

arr = [100,4,200,1,3,2];

console.log(longConsecutive(arr)) // Output 4

//My Solution Complexity
//Time Complexity: O(n) 
//Space Complexity: O(n) 