//  Excel Sheet Column Number

function colNum(str) {

    let result = 0;

    for(let i = 0; i < str.length; i++) {

        const charCode = str.charCodeAt(i) - 64;

        result = result * 26 + charCode;
    }

return result;
}

let str = "ZY";

console.log(colNum(str)); // output ZY = 701