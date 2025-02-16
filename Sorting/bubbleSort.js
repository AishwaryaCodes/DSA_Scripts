// Bubble Sort Algorithm

let data = [4, 2, 7, 1];

console.log("Original Array:", data);

// Bubble Sort Implementation
for (let i = 0; i < data.length; i++) {
    for (let j = 1; j < data.length; j++) {
        if (data[j - 1] > data[j]) {
            // Swap elements
            let temp = data[j - 1];
            data[j - 1] = data[j];
            data[j] = temp;
        }
    }
}

console.log("Sorted Array:", data);
