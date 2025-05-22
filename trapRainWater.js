// Trapping Rain Water

// Two-Pointer Approach (O(n) Time, O(1) Space) 

function trap(arr) {

    let left = 0; 
    let right = arr.length - 1;

    let lmax = 0;
    let rmax = 0;

    let water = 0;


    while(left < right) {

        lmax = Math.max(lmax, arr[left]);

        rmax = Math.max(rmax, arr[right]);


        if(lmax < rmax) {
            water += lmax - arr[left];
            left++;
        }

        else {
            water += rmax - arr[right];
            right--;
        }

    }

     return water;
}

let arr = [0,1,0,2,1,0,1,3,2,1,2,1];

console.log(trap(arr));