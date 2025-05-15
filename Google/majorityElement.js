// Majority Element

function majority(arr) {

    let  n = arr.length; 

    let count = 0; 
    let candidate = null; 

    for(let n of arr) {

        if(count === 0) {
            candidate = n;
        }
        count += (n === candidate) ? 1 : -1; 
    }

    let occurance = 0; 

    for(let n of arr) {
        if(n === candidate) occurance++;
    }


    return (occurance > n/2 ) ? candidate : -1; 

}

let arr = [7, 7, 2, 7, 3, 5, 7];

console.log(majority(arr));

