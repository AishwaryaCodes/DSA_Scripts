// Find a peak element in array eg - [ a < b > c  ]

function peakElement(arr) {

    let n = arr.length;

    if(n === 1 || arr[0] > arr[1]) return 0;

    for(let i = 1; i < n - 1; i++) {
        if(arr[i - 1] < arr[i] &&  arr[i] > arr[i + 1]) return i
    }

    if (arr[n - 1] > arr[n - 2]) return n - 1;

    return -1;
}

arr = [1, 2, 4, 5, 7, 8, 3];


console.log(peakElement(arr)); // Output: 5 

console.log(peakElement([1, 3, 5, 7]));  // Output: 3 (Element: 7, last element is a peak)
console.log(peakElement([10, 5, 3, 1])); // Output: 0 (Element: 10, first element is a peak)
console.log(peakElement([10])); // Output: 0

console.log(peakElement([10, 20, 15, 2, 23, 90, 80]));


//Time Complexity: O(n) - where n is the length of the arrays.
//Space Complexity: 𝑂(1) - Algorithm does not use any extra space.