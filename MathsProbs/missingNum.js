function missingNum(num) {
    let sum = 0;

    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }

    return num.length * (num.length +1)/2 - sum;
}

console.log(missingNum([0, 1, 3]));
