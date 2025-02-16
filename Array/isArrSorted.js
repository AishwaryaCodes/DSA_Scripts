function isArraySorted(arr) {

    for(let i = 1; i < arr.length; i++) {

        if(arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true; 
}

arr = [2,4,6,8, 9, 3];

console.log(isArraySorted(arr));