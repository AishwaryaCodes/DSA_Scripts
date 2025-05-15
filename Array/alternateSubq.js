// Longest Unequal Adjacent Groups Subsequence I

function alterSubq(arr1, arr2) {

    let n = arr1.length;
    let result = [];

    if(n === 0) return result;

    result.push(arr1[0]);


    for(let i = 1; i < n; i++) {
        if(arr2[i] !== arr2[i - 1]) {
            result.push(arr1[i])
        }
    }

return result; 
}

let arr1 = ["a","b","c","d"];

let arr2 = [1,0,1,1];

console.log(alterSubq(arr1, arr2));
