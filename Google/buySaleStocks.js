// Best Time to Buy and Sell Stock

function maxProfit(prices) { 

    let minPrice = Infinity; // Initialize minPrice to a very large number
    let maxProfit = 0; // Initialize maxProfit to 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // Update minPrice if current price is lower
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice; // Update maxProfit if current profit is higher
        }
    }

    return maxProfit; // Return the maximum profit
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5