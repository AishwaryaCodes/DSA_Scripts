// Fruit Into Baskets 

function maxFruit(arr) {

    let left = 0, right = 0, maxLen = 0, n = arr.length;

    let mapArr = {};

    while(right < n) {
        
        mapArr[arr[right]] = (mapArr[arr[right]] || 0) + 1;

        if(Object.keys(mapArr).length > 2) {
            mapArr[arr[left]]--;

            if(mapArr[arr[left]] === 0) delete mapArr[arr[left]];
            
            left++;
        }
        
        maxLen = Math.max(maxLen, right - left + 1);
        
        right++;
    }

return maxLen;

}

arr = [1,2,3,2,2];

console.log(maxFruit(arr));