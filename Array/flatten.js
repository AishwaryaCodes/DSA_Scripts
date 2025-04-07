// Flatten Array

function flattenArr(arr) {

    const resultArr = [];

    for(let i = 0; i < arr.length; i++) {

        const mainArrItem = arr[i];

        if(Array.isArray(mainArrItem)) {
            const flatItem = flattenArr(mainArrItem);

            for(let j = 0; j < flatItem.length; j++) {
                resultArr.push(flatItem[j]);
            }
        }

        else resultArr.push(mainArrItem);

    }

    return resultArr;

}

arr = [ [ [ [1], 2], 3], [4], [], [[5]]];

console.log(flattenArr(arr));

console.log(flattenArr(['abc', ['def', ['ghi', ['jkl']]]]));


// TC  - O(n) because the inner and outer loops operate on different items. No item is processed twice.

// SC - O(n)