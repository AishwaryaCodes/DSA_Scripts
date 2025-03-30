// Single Number 

function singleNum(arr) {

    let n = arr.length;

    let single = 0; 

    for(let n of arr) {
        single ^= n;
    }

    return single;

}

arr = [4, 1, 2, 1, 2];

console.log(singleNum(arr));

