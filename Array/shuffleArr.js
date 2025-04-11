//Shuffle the array

function shuffle(arr, n) {

    let result = [];

    for(let i = 0; i < n; i++) 
        result.push(arr[i], arr[i + n]);
    

return result;
}

let arr = [2,5,1,3,4,7], n = 3;

console.log(shuffle(arr, n));