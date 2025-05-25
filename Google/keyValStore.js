// Time Based Key Value Store

class TimeMap {
    constructor() {
        this.store = new Map();  // array of Timestap and value
    }


// Store the val for the given key at given time. - eg set("foo", "bar", 1)
set(key, value, timestamp) {
    if(!this.store.has(key)) {
        this.store.set(key, []);
    }

    // Push the new { time, val } to key's arr
    this.store.get(key).push({timestamp, value });
}


get(key, timestamp) {

    //if key was never set - return empty string
    if(!this.store.has(key)) return "";

    //get list of all - {time , val} entry for key
    let arr = this.store.get(key);

    //Binary search - to find the large time < target time
    let l = 0;
    let r = arr.length - 1;
    let res = "";

    while(l <= r) {
        let m = Math.floor((l + r) / 2);

        if(arr[m].timestamp === timestamp) {
            return arr[m].value;
        }
        else if (arr[m].timestamp < timestamp) {
            res = arr[m].value;
            l = m + 1;
        }
        else r = m - 1;
    }

    return res;

}

}

const timeMap = new TimeMap();

timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1));  // Output: "bar"
console.log(timeMap.get("foo", 3));  // Output: "bar"
timeMap.set("foo", "bar2", 4);
console.log(timeMap.get("foo", 4));  // Output: "bar2"
console.log(timeMap.get("foo", 5));  // Output: "bar2"