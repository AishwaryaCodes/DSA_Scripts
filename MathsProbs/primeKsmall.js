//  K-th Smallest Prime Fraction. 

function kSmallPrime(arr, k) {

    let fractions = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            fractions.push([arr[i], arr[j]]);
        }
    }

    fractions.sort((a,b) => (a[0]/a[1]) - (b[0]/b[1]));

    return fractions[k - 1];

}

let arr = [1,2,3,5];
let k = 3;

console.log(kSmallPrime(arr, k));