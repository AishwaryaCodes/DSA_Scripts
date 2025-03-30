// Merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

function mergeOverlapping(arr) {

    n = arr.length; 

    arr.sort((a,b) => a[0] - b[0]);

    let result = [arr[0]];

    for(let i = 1; i < n; i++) {

        let curr = arr[i];

        let firstInterval = result[result.length - 1]

        if(curr[0] <= firstInterval[1]) firstInterval[1] = Math.max(firstInterval[1], curr[1]);
        
        else result.push(curr);
    }

    return result;

}

arr = [[1,3],[2,6],[8,10],[15,18]];

console.log(mergeOverlapping(arr));
 