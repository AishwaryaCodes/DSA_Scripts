function removeDublicates(arr) {

    let i = 0;

    for(let j = 1; j < arr.length; j++){
        if(arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    arr.length = i + 1;
    return arr;
}

arr = [2,3,4,4,5,6,6];

console.log(removeDublicates(arr));