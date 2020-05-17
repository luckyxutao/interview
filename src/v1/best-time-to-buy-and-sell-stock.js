/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    //存放完
    let dp = [];
    let tempMaxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        let cur = prices[i];
        tempMaxProfit = 0;
        for (let j = 0; j < i; j++) {
            let prevSibling = prices[j];
            //表明有利可图
            if(prevSibling < cur){
                tempMaxProfit = Math.max(tempMaxProfit,cur-prevSibling);
            }
        }
        dp[i] = tempMaxProfit;
    }
    let res = 0;
    let j = 0;
    while(j<dp.length){
        res = Math.max(res,dp[j]);
        j++;
    }
    return res;
};

var arr = [7, 1, 5, 3, 6, 4];

/**
 * dp[i] = 0, 0  4  2  
 * 
 * 
 * 
 * 
 */

console.log(maxProfit(arr));

/**
 *  0  1  2  3  4  5
 * [7, 1, 5, 3, 6, 4]
 * 0,  0,
 *
 *
 *
 */