// Prime Pairs with targer sum. 

function primePairSum(n) {

    const isPrime = (n) => {
        if(n < 2) return false;
        for(let i = 2; i * i <= n; i++) if(n % i === 0) return false;
        return true;
    }

    let result = [];

    for(let x = 2; x <= n/2; x++) {
        let y = n - x;
        if(isPrime(x) && isPrime(y)) result.push([x, y]);
    }
    
 return result; 
}

console.log(primePairSum(10));