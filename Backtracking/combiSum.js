// Combination Sum 

function combiSum(arr, t) {

    let n = arr.length;

    let result = [];

    function backtrack(start, path, total) {
        if(total === t) {
            result.push([...path]);
        }


        if(total > t) return;


        for(let i = start; i < n; i++) {
            path.push(arr[i]);

            backtrack(i, path, total + arr[i]);

            path.pop();

        }
    }
    
 backtrack(0, [], 0);

 return result;

}

let arr = [2,3,5], t = 8;

console.log(combiSum(arr, t));