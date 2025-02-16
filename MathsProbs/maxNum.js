function maxNum(num) {
    let max = num[0];

    for(let i = 1; i < num.length; i++) {
        if(num[i] > max){
            max = num[i];
        }
    }
    return max;
}

let num = [1,5,8,7,20];

console.log(maxNum(num));