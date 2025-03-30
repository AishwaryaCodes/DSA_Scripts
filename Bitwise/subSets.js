// Given array, form subsets 

function subSets(arr) {

    let n = arr.length; 

    let result = [];

    let totalSubset = 1 << n; 

    for(let i = 0; i < totalSubset; i++){
        let subset = [];

        for(let j = 0; j < n; j++) {
            if((i & (1 << j)) !== 0) subset.push(arr[j]);
        }

        result.push(subset);
    }

    return result;

    console.log(totalSubset);

}

arr = [1,2,3]; 

console.log(subSets(arr));

//Time Complexity: N * 2^n
//Space Complexity: 2^n * N