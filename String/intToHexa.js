// Convert Integer into hexa deciomal string

function convert(num) {

    if(num === 0) return "0";

    const hexMap = '0123456789abcdef';

    let result = "";

    while(num !== 0 && result.length < 8) {
        result = hexMap[num & 15] + result;
        num >>>= 4;
    }

return result;

}


let num = 26;
console.log(convert(num));