// Binarywatch 

function binaryWatch(turnedOn) {

    let result = [];

    for(let h = 0; h < 12; h++) {
        for(let m = 0; m < 60; m++) {
            if(countBit(h) + countBit(m) === turnedOn) {
                result.push(`${h} : ${m.toString().padStart(2, '0')}`);
            }
        }
    }
    return result;
}

function countBit(n) {
    let count = 0;

    while(n > 0) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}

console.log(binaryWatch(2));