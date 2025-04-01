//Smallest Value After Replacing With Sum of Prime Factors.

function replacePrimeFactor(n) {

    const sumOfPrimeFactor = (n) => {
        let sum = 0, d = 2;

        while(d * d <= n) {
            while(n % d === 0) {
                sum += d;
                n /= d;
            }
            d++;
        }
        if(n > 1) sum += n;
        return sum;
    };


    while(true) {
        let sum = sumOfPrimeFactor(n);

        if(sum === n) break;

        n = sum;
    }

    return n;

}

console.log(replacePrimeFactor(15));