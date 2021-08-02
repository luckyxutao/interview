/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
  if(!grid||!grid.length === 0){
    return 0;
  }
  let columnLen = grid[0].length;
  let rowLen = grid.length;
  let dp = [];
  for(let i = 0;i<rowLen;i++){
    for(let j = 0;j<columnLen;j++){
      if(!dp[i]){
        dp[i] = [];
      }
      if(i>0 && j>0){
        dp[i][j] =  Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j];
      } else if(i>0 && j==0){
        dp[i][j] =  dp[i-1][j] + grid[i][j];
      } else if(i==0 && j>0){
        dp[i][j] =  dp[i][j-1] + grid[i][j];
      } else if(i==0 && j==0){
        dp[i][j] = grid[i][j]
      }
    }
  }
  return dp[rowLen-1][columnLen-1];
};

const grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1]];

  console.log(minPathSum(grid))
/*
输入：grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。

*/