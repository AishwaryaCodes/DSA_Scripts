// Find all elements that appear more than n/k times in Array. 
// Using Boyer-Moore Majority Vote Algorithm.

function eleMoreTimes(arr, k){

    let n = arr.length;

    let more = Math.floor(n/k);

    let mapArr = new Map();

    for(let num of arr) {
       if(mapArr.has(num)) {
        mapArr.set(num, mapArr.get(num) + 1);
       }
       else if (mapArr.size < k + 1) {
        mapArr.set(num, 1)
       }
       
    }
       
        
    
} 