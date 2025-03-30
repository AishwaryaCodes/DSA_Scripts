// Merge 2 array without using extra space. 

function merge(arr1, arr2, n , m) {

    let left = n - 1; 
    let right = 0;

    while(left >= 0 && right < m) {

        if(arr1[left] > arr2[right]) {
            [arr1[left], arr2[right]] = [arr2[right], arr1[left]]
            left--;
            right++;
        }

        else break;

        arr1.sort((a,b) => a - b);
        arr2.sort((a,b) => a - b);
    }
}

n = 4, m = 4;
arr1 = [1, 3, 5, 7];
arr2 = [0, 2, 6, 8];

console.log(merge(arr1, arr2, n , m));


console.log("arr1:", arr1); 
console.log("arr2:", arr2);
