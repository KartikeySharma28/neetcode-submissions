class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let low = prices[0] 
        let max = 0 
        for( let i = 0 ; i<prices.length; i ++){
            if(low> prices[i]){
                low =  prices[i]
            }
            if(max < prices[i]-low){
                max =  prices[i]-low;
            }
        }
        return max
    }
}
