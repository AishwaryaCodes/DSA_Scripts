// String Compression

function strComm(arr) {

    let write = 0, read = 0; 

    while(read < arr.length) {
        let currChar = arr[read];
        let count = 0;

        while(read < arr.length && arr[read] === currChar) {
            read++;
            count++;
        }

        arr[write++] = currChar;

        if(count > 1) {
            for(let digit of String(count)) arr[write++] = digit; 
        }
    }

    return write;

}

let arr = ["a","a","b","b","c","c","c"]; 

console.log(strComm(arr)); // output - 6 -  total num of elements after compression ["a","2","b","2","c","3"]