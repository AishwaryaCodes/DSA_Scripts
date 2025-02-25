//What the code will print ?

let i = 0;

setInterval(function() {
    console.log(i++)
}, 1000);

// The code will print 0, 1, 2, 3, ... endlessly. 
// The loop increments i every second, and setInterval keeps calling the function without stopping.