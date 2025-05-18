// Insert Interval 

function insert(arr, inter) {

    let n = arr.length; 
    let result = [];

    let i = 0;

    while(i < n && arr[i][1] < inter[0]) {
        result.push(arr[i]);
        i++;
    }

    while(i < n && arr[i][0] <= inter[1]) {

        inter[0] = Math.min(inter[0], arr[i][0]);
        inter[1] = Math.max(inter[1], arr[i][1]);

        i++;
    }

    result.push(inter);

    while(i < n) {
        result.push(arr[i]);
        i++
    }

    return result;

}

let intervals = [[1,3],[6,9]], newInterval = [2,5];

console.log(insert(intervals, newInterval));

//Output: [[1,5],[6,9]]