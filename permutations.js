// Permutations - Backtracking Approch


function getAllPermu(nums) {

    let result = [];

    function backTrack(start) {
        if(start === nums.length) {
            result.push([...nums]);
            return;
        }


        for(let i = start; i < nums.length; i++) {

            [nums[start], nums[i]] = [nums[i], nums[start]]; // swap

            backTrack(start + 1);

            [nums[start], nums[i]] = [nums[i], nums[start]]; // backTrack - undo swap
        }
    }

    
    backTrack(0);

return result;

}

let nums = [1, 2, 3];

console.log(getAllPermu(nums));

