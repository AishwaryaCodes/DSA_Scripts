// Convert Array into Zig - Zag Fashion - arr[0] < arr[1]  > arr[2] < arr[3] > arr[4] < ..,

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
    }
    
    function zigZag(arr) {
    
        for(let i = 0; i < arr.length; i++) {
            if(i % 2 === 0) {
                if(i + 1 < arr.length && arr[i] > arr[i + 1]) {
                    swap(arr, i, i +1);
                }
            }  
            else {
                if(i + 1 < arr.length && arr[i] < arr[i + 1]){
                    swap(arr, i, i +1);
                }
            }
        }
        return arr;
    }

    arr = [4, 3, 7, 8, 6, 2, 1]

    console.log(zigZag(arr)); 