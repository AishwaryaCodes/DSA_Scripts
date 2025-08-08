let ogi = "Hello Good Morning";

let encode = encodeURIComponent(ogi);
console.log("Encode", encode);

let decode = decodeURIComponent(encode);

console.log("Decode", decode);


console.log("************************");

let url = "https://google.com/product/user=" + encodeURIComponent("id123400 & paymentInfo");
console.log(url);

let decodeUrl = decodeURI(url);
console.log(decodeUrl);