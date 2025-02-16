function largeElement(arr) {
    let large = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > large) {
            large = arr[i];
        }
    }
    return large;
}

arr = [3,6,4,8];

console.log(largeElement(arr));