//  Kids With the Greatest Number of Candies

function maxCandies(candies, extraCandies) {

    let max = Math.max(...candies);

    return candies.map(item => item + extraCandies >= max);

}

let candie = [2,3,5,1,3], extraCandies = 3

console.log(maxCandies(candie, extraCandies));