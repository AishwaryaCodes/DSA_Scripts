//Sort an array in wave form

function waveArr(arr) {

    let n = arr.length;

    for(let i = 0; i < n; i += 2) {

        if(i > 0 && arr[i - 1] > arr[i]) 
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];


        if(i < n - 1 && arr[i] < arr[i + 1])
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

    }

    return arr;

}


arr = [10, 5, 6, 3, 2, 20, 100, 80] // [10 > 5 < 6 > 3 > 2 < 20 < 100 < 80]

console.log(waveArr(arr)); // [10 > 5 < 6 > 2 < 20 > 3 < 100 > 80 ]