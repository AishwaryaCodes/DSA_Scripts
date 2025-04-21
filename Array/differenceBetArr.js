// Difference between 2 arrays

function diffArr(arr1, arr2) {

    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    let diff1 = [...set1].filter(n => !set2.has(n));
    let diff2 = [...set2].filter(n => !set1.has(n));

    return [diff1, diff2];

}

let arr1 = [1,2,3];
let arr2 = [2,4,6];

console.log(diffArr(arr1, arr2));