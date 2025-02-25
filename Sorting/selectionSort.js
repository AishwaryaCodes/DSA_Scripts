// Selection Sort

function selectionSort(arr) {

    for(let i = 0; i < arr.length - 1; i++) {

        let min = i;

        for(let j = i + 1; j < arr.length; j++) {

            if(arr[j] < arr[min]) {
                min = j;
            }
        }

        if(min !== i) 
            [arr[i], arr[min]] = [arr[min], arr[i]]; // Swapping using destructuring
       
    }

    return arr;
}

arr = [6, 9, 2, 7, 4, 1];

console.log(selectionSort(arr));

//Time Complexity: O(n^2)  - where n is the number of elements in the array.
//Space Complexity: O(1) - Doesn't use extra space.