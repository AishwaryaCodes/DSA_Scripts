// Find 2nd Largest Element in Array. 

function  secondLargeEle(arr) {
    let large = arr[0];
    let slarge = -1;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > large) {
            slarge = large;
            large = arr[i];
        }
        else if(arr[i] > slarge && arr[i] !== large){
            slarge = arr[i];
        }
        
    }
    return slarge;
}

arr = [2,5,3,8,0,1];

console.log(secondLargeEle(arr));


// Time complexity: O(N)
// Space Complexity: O(1)