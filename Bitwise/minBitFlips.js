// Min Bits - flip

function minBitFlips(start, goal) {

    let xor = start ^ goal;
    
    let count = 0;

    while(xor > 0) {
        count += xor & 1;

        xor >>= 1
    }

return count;
 
};

start = 10;  // 1010
goal = 7;   // 0111

console.log(minBitFlips(start, goal));