// Divide 2 Integer's 

function divide(divident, divisor) {

    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    if(divident === INT_MIN && divisor === -1) return INT_MAX;

    let n = BigInt(Math.abs(divident));
    let d = BigInt(Math.abs(divisor));
    let result = BigInt(0);

    while(n >= d) {
        let count = BigInt(0);

        while(n >= (d << (count + BigInt(1)))) count++;

        result += BigInt(1) << count;
        n -= d << count;
    }

    let sign = (divident > 0) === (divisor > 0);
    result = sign ? result: -result;

    if(result > INT_MAX) return INT_MAX;
    if(result < INT_MIN) return INT_MIN;

    return Number(result);
}

console.log(divide(10, 3));

