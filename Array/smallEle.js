function smallElement(arr) {
    let small = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < small) {
            small = arr[i];
        }
    }

    return small;
}

arr = [2,6,3,8,3, 1, 0];

console.log(smallElement(arr));