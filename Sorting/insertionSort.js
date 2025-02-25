// Insertion Sort

function insertionSort(arr){

    for(let i = 1; i < arr.length; i++) {
        let store = arr[i];

        let j = i - 1;

        while(j >= 0 && arr[j] > store) {

            arr[j + 1] =  arr[j];

            j--;
        }

        arr[j + 1] = store;
    
    }

    return arr; 

}

arr = [6, 9, 2, 7, 4, 1];

console.log(insertionSort(arr));