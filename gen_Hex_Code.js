// function to generate a random hex color code.

function genrateHex () {

    let randomNum = Math.floor(Math.random() * 0xFFFFFF);

    let hexString = randomNum.toString(16).padStart(6, '0'); //toString(16) >> hexadecimal (0–9 + A–F).

                                           // padStart(6, '0') >> we pad with '0' so short hex strings always become 6 characters long.

    return `#${hexString}`;

}

console.log(genrateHex());

gen_Hex_Code.js