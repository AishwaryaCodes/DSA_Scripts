// Product of all Array Elements,  except the i-th index

function product(arr) {

    let n = arr.length;
    let prefix = 1, sufix = 1;

    let res = new Array(n).fill(1); 
  

    for(let i = 0; i < n; i++){
        res[i] = prefix;
        prefix *= arr[i];
    }
    
   
    for(let j = n - 1; j >= 0; j --) {
        res[j] *= sufix;
        sufix *= arr[j];
    }

    return res;

}

arr = [1, 2, 3, 4];

console.log(product(arr)); // [24, 12, 8, 6]


//Time Complexity: O(n) - where n is the number of elements in the array.
//Space Complexity: O(1) - Algorithm does not use any extra space.
