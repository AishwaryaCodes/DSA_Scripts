function leftRotateArrByOne(arr) {
    let temp = arr[0];

    for(let i = 0; i < arr.length - 1; i++){

        arr[i] = arr [i + 1];
    }

    arr[arr.length - 1] = temp;

    return arr;
}

arr= [1,2,3,4];

console.log(leftRotateArrByOne(arr));