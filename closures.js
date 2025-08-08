//Basic of Closures

function piggBank() {
    let coin = 0; // private, not directly accessible outside

    return function addCoin() { //this inner funtion is closure
        coin++; 
        console.log(coin);
    }
}

let myBank = piggBank();
myBank(); 
myBank();
myBank();

console.log("************************");

function add(a) {
    return function(b) {
        return a + b; 
    }
}

const comput = add(10);
console.log(comput(5));
console.log(comput(10));

console.log("************************");

function once(fn) {
    let called = false, value;

    return function(...args) {
        if(!called) {
            called = true;
            value = fn.apply(this.args);
        }
        return value;
    };
}

const init = once(() => {console.log("init"); return 42;})
console.log(init());
console.log(init());


console.log("************************");
//cache results for same arguments

function memorize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if(cache.has(key)) return cache.get(key);

        const result = fn.apply(this, args);

        cache.set(key, result);

        return result;
    }
}

const slowAdd = (a, b) => { 
    for(let i = 0; i < 1e7; i++);  // 1e7 is just scientific notation in JavaScript. 1 × 10^7 = 10,000,000
    return a + b;
}

const fastAdd = memorize(slowAdd);

console.time('1'); console.log(fastAdd(3,4)); console.timeEnd('1');
console.time('2'); console.log(fastAdd(3,4)); console.timeEnd('2');