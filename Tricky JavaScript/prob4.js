//What the code will print ?

console.log(1);

setTimeout(function() {
    console.log(2)
}, 0);

console.log(3);

// setTimeout is asynchronous. 
// The callback is placed in the event queue after the synchronous code runs, so 1 and 3 are printed before 2.
