//  Sieve of Eratosthenes - print all prime num's untill n

function sieveOfEratosthenes(n) {

    let prime = new Array(n + 1).fill(true);
    prime[0] = prime[1] = false; 

    for(let i = 2; i*i <= n; i++){

        if(prime[i]) {
            for(let j = i * i; j<= n; j+= i) {
                prime[j] = false;
            }
        }
    }

    const result = [];
    for(let i = 2; i <= n; i++) {
        if(prime[i]) result.push(i);
    }

    return result;
}

console.log(sieveOfEratosthenes(30));

//Time Complexity: O(n log log n)
//Space Complexity: O(n) 