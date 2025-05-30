//  Backspace String Compare 

function check(s, t) {

    let i = s.length - 1;
    let j = t.length - 1;

    let skipS = 0;
    let skipT = 0;


    while(i >= 0 || j >= 0) {

        while(i >= 0){
            if(s[i] === "#") {
                skipS++;
                i--;
            }
            else if (skipS > 0) {
                skipS--; 
                i--;
            }
            else break;
        }


        while(j >= 0) {
            if(t[j] === "#") {
                skipT++;
                j--;
            }
            else if(skipT > 0) {
                skipT--;
                j--;
            }
            else break;
        }


        if (s[i] !== t[j]) return false;
        i--;
        j--;

    }

    return true;
}

let s = "ab#c", t = "ad#c";

console.log(check(s, t));