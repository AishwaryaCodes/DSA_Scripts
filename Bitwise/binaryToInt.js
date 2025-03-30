// Convert Binary Value to Interger. 

function binaryToInt(binary) {

    let num = 0;

    // If Given binary num is negative
    let isNegative = false;
    
    if(binary[0] === '-') {
        isNegative = true;
        let newBinary = '';
        for(let i = 1; i < binary.length; i++){
         newBinary += binary[i];
        }
        binary = newBinary;
    }


    for(let i = 0; i < binary.length; i++) {
        let bit = binary[i];

        if(bit === '1') {
            num = num * 2 + 1;
        }
        else if (bit === '0') {
            num = num * 2;
        }
    }


    if(isNegative) {
        num = -num;
    }


   return num;
}

console.log(binaryToInt('111'));     // Output: 7
console.log(binaryToInt('1101'));    // Output: 13
console.log(binaryToInt('-1101'));   // Output: -13


//My Solution Complexity
//Time Complexity: O(n)
//Space Complexity: O(n)


// JavaScript Pre-Define Methods for Convert Binary Value to Interger.
// let binary = parseInt(binary, 2);
// console.log('111');