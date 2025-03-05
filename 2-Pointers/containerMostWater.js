// Container with Most Water - 2 - pointer approch. 

function maxWater(height) {

    let left = 0;
    let right = height.length - 1;
    let maxwater = 0; 

    while(left < right) {

        let w = right - left;
        let h = Math.min(height[left], height[right]);

       let currArea = w * h;

       maxwater = Math.max(maxwater, currArea);

       height[left] < height[right] ? left++ : right--;
    }

  return maxwater;
} 

height = [1,8,6,2,5,4,8,3,7]

console.log(maxWater(height));  // Output: 49

// Time Complexity: O(N) 
// Space Complexity: O(1) 