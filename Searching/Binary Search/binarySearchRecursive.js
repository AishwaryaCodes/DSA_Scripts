// Binary Search Implementation with Recursive Method. 

function recursiveBinary(arr, low, high, target){
  
    if(low > high) return -1;

        
    let mid = Math.floor(low + (high - low) / 2);

    if(arr[mid] === target)  return mid;
    
    else if(target > arr[mid]) return recursiveBinary(arr, mid + 1, high, target);
       
    else return recursiveBinary(arr, low, mid - 1, target);
   
}

arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

console.log(recursiveBinary(arr, 0, arr.length - 1, 23));


//Time Complexity: O(log N)  - where n is the number of elements in the array.
//Space Complexity: O(log N) - Using Recursion stack.
