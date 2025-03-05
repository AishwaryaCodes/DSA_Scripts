// 3 Sum - 2 pointer approch. 

function threeSum(arr) {
  arr.sort((a, b) => a - b); // [ -4, -1, -1, 0, 1, 2 ]

  const res = [];
  let n = arr.length;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let j = i + 1;
    k = n - 1;

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];

      if (sum === 0) {
        res.push([arr[i], arr[j], arr[k]]);

        while (j < k && arr[j] === arr[j + 1]) j++;
        while (j < k && arr[k] === arr[k - 1]) k--;

        j++;
        k--;
      }

      else if (sum < 0) j++;
      
      else k--;

    }
  }

  return res;
}

arr = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(arr)); // Output: [[-1,-1,2],[-1,0,1]]


// Time Complexity: O(NlogN) + O(N 2)= O(N^2)
// Space Complexity: O(1) 