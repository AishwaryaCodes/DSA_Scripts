// Contains Dublicates in Array - Part 3. 


var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    if ((valueDiff == 0) && (new Set(nums).size == nums.length)) return false;
    
    let bucket = new Map();
    const width = valueDiff + 1;

    for (let idx = 0; idx < nums.length; idx++) {
        let curNumber = nums[idx];
        let bucketIdx = Math.floor(curNumber / width);

        if (bucket.has(bucketIdx)) return true;
        else if (bucket.has(bucketIdx + 1) && Math.abs(curNumber - bucket.get(bucketIdx + 1)) < width) return true;
        else if (bucket.has(bucketIdx - 1) && Math.abs(curNumber - bucket.get(bucketIdx - 1)) < width) return true;

        bucket.set(bucketIdx, curNumber);

        if (idx >= indexDiff) {
            let oldNumber = nums[idx - indexDiff];
            let oldNumberBucketIdx = Math.floor(oldNumber / width);
            bucket.delete(oldNumberBucketIdx);
        }
    }

    return false;
};
