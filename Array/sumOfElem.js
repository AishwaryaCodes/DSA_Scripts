function sumOfElem(num) {
    let sum = 0;

    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }

    return sum;
}

console.log(sumOfElem([1,2,3,4]));