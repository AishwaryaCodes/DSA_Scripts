// Single Number num - nums apper thrice 

function singleNum(arr) {

    // arr.sort((a, b) => a - b);

    // for(let i = 0; i < arr.length; i += 3) {

    //     if(arr[i] != arr[i + 1]) return arr[i];
    // }

    // return arr[arr.length - 1];



    // BitWise 

    let once = 0, twos = 0; 

    for(let i = 0; i < arr.length; i++) {

        once = (once ^ arr[i]) & ~twos; 

        twos = (twos ^ arr[i]) & ~once;

    }

    return once;

}

arr = [2, 2, 2, 3];

console.log(singleNum(arr));