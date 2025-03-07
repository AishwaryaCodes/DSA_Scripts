// Find the Factorial of num.

function factorial(n) {

    let fact = 1;

    for(let i = 1; i <= n; i++) {
       fact *= i;
    }

    return fact;
}

console.log(factorial(5)); // output 120 - 5 * 4 * 3 * 2 * 1

console.log(factorial(20)); 