// Pure Functions 
// Always return the same O/P for same I/P
// Has no side effects - Dont modify anything outside the scope
// Eg - No Global variable, no DOM manipulation, no API calls, etc
// Its used to test - just pass the I/P and check the return value.
function add(a,b) {
    return a + b;
}

// Impure Function
// Use and modify global count.
// side effect present
let count = 0;
function increment() {
    count++;
    return count;
}

// Impure Function - Because it has console.log, which is side effect.
function add(a,b) {
    return a + b;
    console.log("The input arguments are:", a, b);
}

