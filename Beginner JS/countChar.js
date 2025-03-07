// String & Character is given, count & return how many times a perticular caharater is repeating. 
// using Reduce method

function countChar(str, char) {

    str = str.toLowerCase();
    char = char.toLowerCase();

    return strCount = str.split("").reduce((accum, currWord) => {

        if(currWord === char) accum++

        return accum;
    }, 0 );

}

console.log(countChar("MississIppi", "I"));