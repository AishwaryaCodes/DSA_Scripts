// Sort the array in wave form. - arr[0] > arr[1] < arr[2] > arr[3] < arr[4] > …

function swap(arr, i, j) {
let temp = arr[i];
arr[i] = arr[j]
arr[j] = temp;
}

function sortArr(arr) {

    for(let i = 0; i < arr.length; i++) {
        if(i % 2 === 0) {
            if(i + 1 < arr.length && arr[i] < arr[i + 1]) {
                swap(arr, i, i +1);
            }
        }  
        else {
            if(i + 1 < arr.length && arr[i] > arr[i + 1]){
                swap(arr, i, i +1);
            }
        }
    }
    return arr;
}

arr = [10, 5, 6, 3, 2, 20, 100, 80] // [10 > 5 < 6 > 3 > 2 < 20 < 100 < 80]

console.log(sortArr(arr)); // [10 > 5 < 6 > 2 < 20 > 3 < 100 > 80 ]

//My Solution Complexity
//Time Complexity: O(n) - where n is the number of elements in the array.
//Space Complexity: O(1) - Algorithm does not use any extra space.
                  