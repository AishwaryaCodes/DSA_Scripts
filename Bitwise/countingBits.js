// Counting Bits 

function count(n) {

    let ans = new Array(n + 1).fill(0);

    for(let i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }

    return ans;
}

let n = 5;

console.log(count(n));