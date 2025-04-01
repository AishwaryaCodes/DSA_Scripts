// Count total Prime from 0 to n - using Optimal solution - Sieve of Eratosthenes Algorithm

function countPrime(n) {
    if(n < 2) return 0; 

    const isPrime = Array(n).fill(true);

    isPrime[0] = isPrime[1] = false;

    for(let i = 2; i*i <= n; i++) {
        if(isPrime[i]) 
            for(let j = i*i; j < n; j += i)
                isPrime[j] = false;
    }

    return isPrime.filter(Boolean).length;

}

console.log(countPrime(30));