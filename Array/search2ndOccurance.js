//Search Second Occurrence of Element in Array

let data = [1, 2, 4, 5, 6, 7, 8, 4, 8, 5, 4];      
let search = 4;

let occurance = 0;
let index = -1;

for (let i = 0; i < data.length; i++) { 
    if (data[i] === search) {
        occurance++;
        if (occurance === 2) {
            index = i;
            break;
        }
    }    
}

console.log(index); // Output the index of the second occurrence of 4
