// Move zeros

function move(arr) {

    let num = 0;

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] !== 0) {
            [arr[num], arr[i]] = [arr[i], arr[num]]
            num++;
        }
    }

    return arr;
}

let arr = [ 2, 0, 5, 0, 2, 4, 6, 0, 2, 1];

console.log(move(arr));