// Distinct Prime Factors 

function primeFactors(nums) {

    let primeSet = new Set();

    const getPrimeFactors = (n) => {
        let i = 2;

        while(i * i <= n) {
            if(n % i === 0) {
                primeSet.add(i);
                while( n % i === 0) n = Math.floor(n/i);  
            }

            else i++;
        }

        if(n > 1) primeSet.add(n);
    };


    for(let n of nums) getPrimeFactors(n);


    return primeSet.size;

}

console.log(primeFactors([2, 4, 3, 7, 10, 6])); // ➞ 4


// Time Complexity: O(m * √n)

// Space Complexity: O(k)