// Print total sum of all elements present in the array.

function sumOfElem(num) {
    let sum = 0;

    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }

    return sum;
}

console.log(sumOfElem([1,2,3,4]));

//Time Complexity: O(n) - where n is the length of the arrays.
//Space Complexity: 𝑂(1) 
