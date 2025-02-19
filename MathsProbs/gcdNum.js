// Greatest common Divisor of 2 numbers

function gcdNum(n1,n2) {

    while(n1> 0 && n2 > 0) {

        if(n1 > n2) n1 = n1 % n2;
        
        else n2 = n2 % n1;
    }

    if(n1 === 0) return n2;
    return n1;
}

console.log(gcdNum(9,12));