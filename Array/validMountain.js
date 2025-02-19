// Valid Mountain Array

function validMountain(arr) {
if(arr.length < 3) return false;
let i = 0;

   while(i + 1 < arr.length && arr[i] < arr[i + 1]) {
    i++;
   }

   if(i === 0 || i === arr.length - 1) return false;
    
   while(i + 1 < arr.length && arr[i] > arr[i + 1]) {
    i++;
   }

   return i === arr.length - 1;

}

arr1 = [1, 3, 5, 7, 6, 4, 2]; //true
arr2 = [1, 2, 2, 3, 4, 3, 1]; //false

console.log(validMountain(arr1));
console.log(validMountain(arr2));


//My Solution Complexity
//Time Complexity: 0(n) - Both while loop run sequentially. 
//Space Complexity: 𝑂(1) - Algorithm does not use any extra space.