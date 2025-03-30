// Single Number 3

function singleNum(arr) {

    //Using Map
    // let count = new Map();

    // for(let n of arr) {
    //     count.set(n, (count.get(n) || 0) + 1);
    // }

    // let result = [];

    // for(let[num, feq] of count.entries()) {

    //     if(feq === 1) result.push(num);

    //     if(result.length === 2) break; 
    // }

    // return result;


    //Bitwise 


    let xor = 0; 

    for(let n of arr) {
        xor ^= n;
    }

    let differBit = xor & -xor; 
    let b1 = 0, b2 = 0; 

    for(let n of arr) {

        if((n & differBit) === 0) b1 ^= n;

        else b2 ^= n;
    }

    return [b1, b2]
}

arr = [1, 2, 1, 3, 2, 6];

console.log(singleNum(arr));