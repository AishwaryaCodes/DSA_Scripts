// Memorization for Addition Function

function memorizedAdd() { 

    let cache = {}

    return function add(a, b) {
        // let key = `${a}, ${b}`;
        console.log(key);
        if(key in cache) {
            console.log("Addtion calculation from cache", key);
            return cache[key];
        }

        console.log("performing addtion for", a , b);

        let res = a + b;
        cache[key] = res;
        return res;
    };
}

const add = memorizedAdd();

console.log(add(2, 2));
console.log(add(2, 2));



console.log("************************");

// Memorization for Fibonacci Function

function memorizedFib() {

    let cache = {} // store already computed results

    return function fib(n) {
        if(n in cache) {
            console.log("Fetching from cache:", n);
            return cache[n]; //n is not a fixed property name, it’s a variable whose value changes each call., hence we cant use cache.n or cache.value
        }
        console.log("Calculating results:", n);

        if(n <= 1) return n;

        let res = fib(n - 1) + fib(n -2);
        cache[n] = res;
        return res;
    };
}

const fib = memorizedFib();


console.log(fib(10)); // First time - calculates
console.log(fib(10)); // Second time - uses cache

