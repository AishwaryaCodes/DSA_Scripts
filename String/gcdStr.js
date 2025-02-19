// Print Greatest Common divisor for given 2 strings

function gcdTwoString(str1, str2) {

    
    function gcd(a,b) {
        return b === 0 ? a : gcd(b, a % b);  //Euclidean Algorithm - gcd(a,b)=gcd(b,a mod b)
    }

    let len = gcd(str1.length, str2.length);

    let candidate = "";

    for(let i = 0; i < len; i++){
        candidate += str1[i];
    }
    
    return (str1 + str2 === str2 + str1) ? candidate : "";
}

console.log(gcdTwoString("ABCABC", "ABC")); // Output: "ABC"

//My Solution Complexity
//Time Complexity: O(n+m) - due to string concatenation. 
//Space Complexity:O(1) - Algorithm does not use any extra space. 