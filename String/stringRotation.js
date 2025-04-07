// 2 string are given, check they are rotation of each other.

function isRotation(str1, str2) {
    return str1.length === str2.length && (str1 + str1).includes(str2);
}

str1 = "waterbottle";
str2 = "erbottlewat";

console.log( isRotation(str1, str2));