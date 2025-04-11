//  Relative Sort Array 

function relativeSort(arr1, arr2) {

    const freq = new Map();

    for(let n of arr1) {
        freq.set(n, (freq.get(n) || 0) + 1 )
    }


    let result = []; 


    for(let n of arr2) {
        while(freq.get(n)) {
            result.push(n);
            freq.set(n, freq.get(n) - 1);
        }
        freq.delete(n);
    }

    const remaining = [];
    for(let [num, count] of freq.entries()) {
        for(let i = 0; i < count; i++) {
            remaining.push(num);
        }
    } 


    remaining.sort((a,b) => a - b); 
    return result.concat(remaining);

}

let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6];


console.log(relativeSort(arr1, arr2));