// 

function primeDaigonals(arr) {

    let maxp = 0; 
    let n = arr.length;

    const isPrime = (n) => {
        if(n < 2 || n % 2 === 0 && n !== 2 || n % 3 === 0 && n !== 3) return false;

        for(let i = 5; i*i <= n; i+= 6) {
            if(n % i === 0 || n % (i + 2) === 0) return false;
        }

        return true;
    }

    for(let i = 0; i < n; i++) {
        const a = arr[i][i];
        const b = arr[i][n - i - 1];

        if(isPrime(a)) maxp = Math.max(maxp, a);

        if(isPrime(b)) maxp = Math.max(maxp, b);
    }

    return maxp;

}

console.log(primeDaigonals([
    [1, 2, 3],
    [5, 17, 7],
    [9, 11, 10]
  ])); // ➞ 17