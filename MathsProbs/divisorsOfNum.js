function divisorsOfNum(n) {
    let divisor =[];

    for(let i = 1; i<= n; i++) {
        if(n % i === 0) {
            divisor.push(i);
        }
    }
    return divisor;
}

console.log(divisorsOfNum(36));