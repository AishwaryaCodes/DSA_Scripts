// Closest Prime Numbers in Range

function closestPrime(l, r) {

    const isPrime = (n) => {
        if(n < 2) return false;
        for(let i = 2; i*i <= n; i++) if(n % 2 === 0) return false;
        return true;   
    }

    let prime = [];

    for(let i = l; i <= r; i++) if(isPrime(i)) prime.push(i);

    if(prime.length < 2) return [-1, -1];

    let minDiff = Infinity;
    let ans = [-1, -1];

    for(let i = 1; i < prime.length; i++) {
        let diff = prime[i] - prime[i - 1];

        if(diff < minDiff) {
            minDiff = diff;
            ans = [prime[i - 1], prime[i]]
        } 
     }

return ans;

}

console.log(closestPrime(10, 19));