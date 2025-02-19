//Reformat the phone number in a certain manner 
//2 digits: A single block of length 2.
//3 digits: A single block of length 3.
//4 digits: Two blocks of length 2 each.

function refactorPhone(num){ 

    let digit = "";

    for(let i = 0; i < num.length; i++){
        if(num[i] >= '0' && num[i] <= '9') {
            digit += num[i];
        }
    }

    let result = "";
    let n = digit.length;
    let i = 0;

    while(n - i > 4) {
        result += digit[i] + digit[i + 1] + digit[i + 2] + "-";
        i += 3;
    }

    if(n - i === 4) {
        result += digit[i] + digit[i + 1] + "-" + digit[i + 2] + digit[i + 3];
    }
    else if(n - i === 3) {
        result += digit[i] + digit[i + 1] + digit[i + 2];
    }
    else {
        result += digit[i] + digit[i + 1];
    }

    return result;

}


console.log(refactorPhone("1-23-45 6"));     // Output: "123-456"
console.log(refactorPhone("123 4-567"));  // Output: "123-45-67"


//My Solution Complexity
//Time Complexity: O(n) 
//Space Complexity: 𝑂(n) 