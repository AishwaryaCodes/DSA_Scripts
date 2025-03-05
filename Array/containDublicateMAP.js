// Contains Dublicates in Array using Map


function containDublicateMap(arr) {

    const mapArr = new Map();

   

    for(let n of arr) {
        if(mapArr.has(n)) return true;
        else mapArr.set(n, 1);
    }

   
    
return false;
}


console.log(containDublicateMap([1,2,3,1])); // true
console.log(containDublicateMap([1,2,5,3,4])); // false


//Time Complexity: O(n) 
//Space Complexity: 𝑂(n)