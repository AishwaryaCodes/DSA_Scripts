// Evaluate Reverse Polish Notation

function operation(arr) {

    let stack = [];

    for(let c of arr) {
        if(["+", "-", "*", "/"].includes(c)) {

            let a = stack.pop();
            let b = stack.pop();

            let result;

            if(c === "+") result = a + b;

            if(c === "-") result = a - b;

            if(c === "*") result = a * b;

            if(c === "/") result = Math.trunc(a / b); 


            stack.push(result);
        }

        else stack.push(Number(c));
    }

    return stack[0];


}

let arr = ["2","1","+","3","*"];


console.log(operation(arr));