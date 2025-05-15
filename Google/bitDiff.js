// Sum of bit differences among all pairs in arr

function bitDiff(arr) {

    let n = arr.length; 

    let total = 0; 

    for(let i = 0; i < 32; i++) {

        let countSet  = 0;

        for(let n of arr) {
            if((n >> i) & 1) countSet++;
        }

        let countUnset = n - countSet;

        total += countSet * countUnset *2;
    }

    return total;
}

let arr = [1, 3, 5];

console.log(bitDiff(arr));