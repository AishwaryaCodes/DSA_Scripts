// Bubble Sort Algorithm

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false; // Track if a swap occurs

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1])
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swapping using destructuring
        swapped = true;
    }
    if (!swapped) break;
  }
  return arr;
}

arr = [6, 9, 2, 7, 4, 1];

console.log(bubbleSort(arr));
