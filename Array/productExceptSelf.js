// product Except Self 

function productExceptSelf(arr) {

    let n = arr.length;

    let result = new Array(n).fill(1);

    let leftP = 1;
    for(let i = 0; i < n; i++) {

        result[i] = leftP;
        leftP *= arr[i];
    }

    let rightP = 1; 
    for(let i = n - 1; i >= 0; i--) {

        result[i] *= rightP;
        
        rightP *= arr[i];

    }
 
return result;

}

let arr = [1, 2, 3, 4];

console.log(productExceptSelf(arr));

