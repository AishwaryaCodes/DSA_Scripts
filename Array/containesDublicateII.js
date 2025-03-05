// Contains Dublicates in Array - Part 2 using Set

function containDublicateII(arr,k) {

    const setArr = new Set();

    for(let i = 0; i < arr.length; i++) {

        if(setArr.has(arr[i])) return true; 

        setArr.add(arr[i]);

        if(setArr.size > k) setArr.delete(arr[i - k]);

    }

return false;

}


console.log(containDublicateII([1,2,3,1], 3)); // true
console.log(containDublicateII([1,2,3,1,2,3], 2)); // false

//Time Complexity: O(N)
//Space Complexity: O(K)