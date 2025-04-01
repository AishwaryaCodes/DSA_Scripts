// prime Sub Operation

function primeSubOperation(nums) {

    let n = nums.length;

    const isPrime = Array(1001).fill(true);

    isPrime[0] = isPrime[1] = false;

    for(let i = 2; i*i <= 1000; i++){
        if(isPrime[i]) 
            for(let j = i*i; i <= 1000; j += i) 
                isPrime[j] = false;
    }

    const prime = [];

    for(let i = 2; i < 1000; i++) {
        if(isPrime[i]) prime.push(i);
    }

    let prev = 0;

    for(let i = 0; i < n; i++) {
        if(nums[i] <= prev) {
            let found = false;

            for (let j = primes.length - 1; j >= 0; j--) {
                const p = primes[j];
                if (p < nums[i] && nums[i] - p > prev) {
                    nums[i] -= p;
                    found = true;
                    break;
                }
            }
            if (!found) return false;
        }
        if (nums[i] <= prev) return false;
        prev = nums[i];
    }

    return true;


}

console.log(primeSubOperation([4, 9, 6, 10]));