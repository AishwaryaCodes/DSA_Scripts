// Same Binary

function sameBinary(arr1, arr2) {

    if(arr1.length !== arr2.length) return false;

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false;
    }

    return true;

}

let arr1 = [1,2];
let arr2 = [1,null, 2];

console.log(sameBinary(arr1, arr2));