// Merge Intervals

function merge(arr) {

    let n = arr.length;
    if(n <= 1) return arr;

    arr.sort((a,b) => a[0] - b[0]);

    let result = [arr[0]];


    for(let i = 0; i < n; i++) {

        let last = result[result.length - 1];

        let curr = arr[i];

        if(curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1]);
        }
        else result.push(curr);
    }

    return result;
};

let arr = [[1,3],[2,6],[8,10],[15,18]];

console.log(merge(arr));