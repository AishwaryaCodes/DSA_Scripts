// 1720. Decode XORed Array

//A XOR B = C  ⇒  B = A XOR C


function decodeArr(encode, first) {

    let decode = [first];

    for(let i = 0; i < encode.length; i++) {

        decode.push(decode[i] ^ encode[i]);
    }

    return decode;
}

let encoded = [1,2,3], first = 1;

console.log(decodeArr(encoded,first));