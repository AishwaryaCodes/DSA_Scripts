// Convert Interger to Binary Value.

function intToBinary(n) {

    // String to store binary value. 
    let binary = '';

    // If num is 0, return 0.
    if(n === 0) return '0';

    //Conver num negative to positive.
    let isNegative = n < 0;
    if(isNegative) n = -n;

    // Loop to convert decomal to binary
    while(n > 0) {
        binary = (n % 2) + binary;
        n = Math.floor(n / 2);
    }

    // if the num is negative, add - or else retun binary
    return isNegative ? '-' + binary : binary
}

console.log(intToBinary(7));
console.log(intToBinary(13));
console.log(intToBinary(-13));

//My Solution Complexity
//Time Complexity: O(log n)
//Space Complexity: O(log n)


// JavaScript Pre-Define Methods for Convert Interger to Binary Value.
// let binary = n.toString(2);
// console.log(binary);
