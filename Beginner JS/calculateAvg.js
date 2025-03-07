// Calculate Avg from the given array. - Using Reduce, Math.floor Method. 

function calAvg(arr) { 

    const avg = arr.reduce((accum, ele) => accum + ele, 0);

    return Math.floor(avg / arr.length);
}

console.log(calAvg([5, 10, 2, 8])); // output 6