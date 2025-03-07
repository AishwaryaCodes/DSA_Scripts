// Find Max in the Array - Using Spread operator, Math.Max

function findMax(arr) {

    return Math.max(...arr);

}

console.log(findMax([3,5, 2, 1, 3, 8, 6, 9])); // output - 9