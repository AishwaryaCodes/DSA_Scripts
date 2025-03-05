// Contains Dublicates in Array using sorting. 

function containDublicate(arr) {

    arr.sort((a,b) => (a - b))

    console.log(arr);

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] === arr[i+1]) return true;
    }
    return false;
}


console.log(containDublicate([1,2,3,1])); // true
console.log(containDublicate([1,2,5,3,4])); // false


//Time Complexity: O(n log n) 
//Space Complexity: 𝑂(1)