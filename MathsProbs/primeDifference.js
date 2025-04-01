// Maximun Prime Difference

function primeMaxDiff(arr) {

    const primeSet = new Set([
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
        31, 37, 41, 43, 47, 53, 59, 61, 67,
        71, 73, 79, 83, 89, 97
    ]);

    let first = -1, last = -1;

    for(let i = 0; i< arr.length; i++){
        if(primeSet.has(arr[i])) {
            if(first === -1) first = i;
            last = i;
        }
    }

    return last - first;

    

}

arr = [4,2,9,5,3];

console.log(primeMaxDiff(arr));