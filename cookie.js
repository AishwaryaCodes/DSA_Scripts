// Creating Cookie - in browser document.cookie is part of browser's DOM API 

function setCookie(name, value, days) {
    let exp = "";

    if(days) {
        const date = new Date();

        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        exp = "; exp =" + date.toUTCString();
    }

    document.cookie = `${name}=${encodeURIComponent(value)}${exp}; path=/`;

}


function getCookie(name) {
    const nameEQ = name + "=";
    const cookie = document.cookie.split(';');

    for(let c of cookie) {
        c = c.trim();

        if(c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length));
        }
    }
    return null;
}


function deleteCookie(name) {
    document.cookie = `${name}=; exp=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}


setCookie("username", "aish", 7);
console.log(getCookie("username"));

//deleteCookie("username");
//console.log(getCookie("username"));



//Node.js - we manage cookie through HTTP headers or package like cookie