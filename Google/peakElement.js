// Peak Element in Array

function peak(arr) {

    let left = 0; 
    let right = arr.length - 1;


    while(left < right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] > arr[mid + 1]) right = mid;

        else left = mid + 1; 
        
    }

    return left;

}

let arr = [0, 5, 4, 3, 2, 1];

console.log(peak(arr));