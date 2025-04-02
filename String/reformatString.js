// Reformat String

function reformatStr(s) {

    let alfa = [], num = [], result = "";

    for(c of s) {
        if(isNaN(c)) alfa.push(c);
        else num.push(c);
    }

    if(Math.abs(alfa.length - num.length) > 1) return "";

    if(num.length > alfa.length) [alfa, num] = [num, alfa];


    for(let i = 0; i < s.length; i++){
        result += i % 2 === 0 ? alfa.pop() : num.pop();
    }

    return result;
}

console.log(reformatStr("a0b1c2"));

console.log(reformatStr("leetcode"));

console.log(reformatStr("1234567890"));