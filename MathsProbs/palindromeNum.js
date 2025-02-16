function palindromeNum(num) {
    let ogiNum = num;
    let revNum = 0;

    while(num > 0) {
        let lastDigit = num % 10;
        revNum = revNum * 10 + lastDigit;

        num = Math.floor(num / 10); 
    }

    return ogiNum === revNum;
}

console.log(palindromeNum(121));