/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let dp = [0];
    for(let i = 1;i<=amount;i++){
      for(let j = 0;j<coins.length;j++){
        const curIcon = coins[j];
        //如果当前面额小于i，否则跳过，也没有说icons是升序的
        if(curIcon<=i){
          //所有面值都试一次，找到值最小的
          // 1表示conins里，选择conins[i]面值
          // 如果dp[i]还没有值(第一次)时则设置为最大值
          dp[i] = Math.min(dp[i]||Infinity, 1 + dp[i-curIcon]);
        }
      }
      if(dp[i] === undefined){
        dp[i] = Number.MAX_SAFE_INTEGER;
      }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};
/*
输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1

*/
const coins = [1, 2, 5], amount = 11;
coinChange([2],3)