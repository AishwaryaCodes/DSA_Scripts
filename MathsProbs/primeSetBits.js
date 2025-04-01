// Prime Set Bits

function primeSetBit (l, r) {

    const isPrime = (n) => {
        if(n < 2) return false;
        for(let i = 2; i * i <= n; i++) {
            if(n % i === 0) return false;
        }
        return true;
    }

    const countSetBits = (n) => {
        let count = 0; 

        while(n > 0){
            if(n % 2 === 1) count++;
            n = Math.floor(n/2);
        }

        return count;
    }


    let total = 0; 

    for(let i = l; i <= r; i++){  
        let setbit = countSetBits(i);
        if(isPrime(setbit)) total++;
    }

    return total;
}

console.log(primeSetBit(6, 10));