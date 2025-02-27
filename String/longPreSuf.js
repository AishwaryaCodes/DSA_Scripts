// longest Prefix in a string, which is also a Suffix

function longestPrefixSuffix(str){

    let n = str.length;

    let lps = [0];
  
    let len = 0;
    let i = 1;

    while(i < n) {
        if(str[i] === str[len]) { 
            len++;
            lps[i] = len;
            i++;
        }
        else {
            if(len !== 0) {
                len = lps[len - 1];
            }
            else {
                lps[i] = 0;
                i++;
            }
        } 
    }

    return lps[n -1];
}


str = 'aabcdaabc';

console.log(longestPrefixSuffix(str));