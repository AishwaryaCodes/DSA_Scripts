function armstrongNum(n) {
    let armNum = 0;
    let oGiNum = n;

    while(n > 0){
        let digit = n% 10;
        armNum += digit* digit* digit;
        n = Math.floor(n / 10);
    }
    return oGiNum === armNum;
}

console.log(armstrongNum(153)); 