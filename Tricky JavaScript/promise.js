console.log("A") // print 1st

//setTimeout(() => console.log("B"), 0); // goes to callback - macro-task

Promise.resolve().then(() => console.log("C")); // this run's 3rd , mirco-task

console.log("D");   // print 2nd

//output  = ADCB

console.log("************************");

for(var i = 1; i <= 3; i++) { // i will run untill 4,  the last val of i will be 4 , it will print 4 , 3times.
    setTimeout(() => console.log(i), i * 1000);
}
//o/p = 4 4 4
console.log("************************");

console.log("Start");

setTimeout(() => {
    console.log("First timeout"); //macro-task

    setTimeout(() => {
        console.log("secont timeout") //macro-task

        setTimeout(() => {
            console.log("3rd timeout")
        }, 0);

    }, 0);
}, 0);

console.log("end");

console.log("************************");

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 4000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 4000));

Promise.allSettled([promiseOne, promiseTwo]).then((data) => console.log(data));

console.log("************************");

Promise.resolve(1)
.then((x) => x + 1)
.then((x) => {throw new Error("Boom");})
.then((x) => console.log("Wont run"))
.catch((e) => console.log("Caught:", e.message))
.then(() => console.log("still runs"));

console.log("************************");

const p = new Promise(
    (resolve) => {
        setTimeout(() => {
            resolve("I am Promise!");
        }, 5000)
    },
    (reject) => {}
);

p.then((value) => console.log(value));