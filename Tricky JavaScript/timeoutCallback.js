console.log("Start code") //print immediately

setTimeout(function() {
    console.log("callback code"); 
}, 5000);

console.log("after callback"); //print immediately

let startTime = new Date().getTime();

let endTime = startTime;

while(endTime <= startTime + 10000) { // this is blocking JS Call Stack, - nothing can be run at this time for 10sec
    endTime = new Date().getTime();
}

console.log("End code"); // when loop end, this will get print. 
//after that , callback code will get print - after < 15 sec


console.log("***************************");

try {
    setTimeout(() => {
        console.log("try block");
        throw new Error(`An exception is thrown`); // the error is thrown, but there is no surrounding try/catch at the moment, so its uncaught error. 
    }, 1000)
}
catch (err) {
    console.log("Error", err);
}

console.log("***************************");
// since the try and catch are withing the same synchronous execution. the catch immediately catches the error.
setTimeout(() => {
    try {
        console.log("try block");
        throw new Error(`An exception is thrown`);
    } catch (err) {
        console.log("Error", err.message);
    }
}, 1000);

console.log("***************************");

function greeting() {
    setTimeout( function() {
        console.log(msg)
    }, 5000);
    const msg = "hello aish"
}

greeting();