function reverseArr(arr, s, e) {
    while(s < e) {
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        s++;
        e--;
    }
}


function leftRotateByK(arr, k) {

    let n = arr.length;

    k = k % n;

    reverseArr(arr, 0, k - 1);

    reverseArr(arr, k, n - 1);

    reverseArr(arr, 0, n - 1);

  
    return arr;

}


arr = [1,2,3,4,5,6];

console.log(leftRotateByK(arr, 2));


//output - [4,5,6,7,8,1,2,3]