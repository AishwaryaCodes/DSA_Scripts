// Capacity To Ship Packages Within D Days

function ship(arr, d) {

    let low = Math.max(...arr);
    let high = arr.reduce((a,b) => a + b, 0); 

    function canShip(capacity) {
        let days = 1; 
        let currLoad = 0;

        for(let w of arr) {
            if(currLoad + w > capacity) {
                days++;
                currLoad = 0;
            }
            currLoad += w;
        }

        return days <= d;
    } 


    while(low < high) {
        let mid = Math.floor((low + high) / 2);

        if(canShip(mid)) {
            high = mid;
        }
        else low = mid + 1;
    }

    return low;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let d = 5;

console.log(ship(arr, d));