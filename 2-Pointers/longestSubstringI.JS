function maxSting(s, k) {

    let left = 0, right = 0, maxLen = 0, n = s.length;

    let mapObj = {};

    while(right < n) {

        mapObj[s[right]] = (mapObj[s[right]] || 0) + 1;

        if(Object.keys(mapObj).length > k) {

            mapObj[s[left]]--;

            if(mapObj[s[left]] === 0)  delete mapObj[s[left]];

            left++;
        }
            maxLen = Math.max(maxLen, right - left + 1);
            right++; 
        }

   return maxLen;
}

s = "aabbcc";

k = 2;

console.log(maxSting(s, k));