/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    if(!grid||!grid.length){
        return 0;
    }
    /*
    dp[i][j] = max(dp[i][j-1],dp[i-1][j]) + dp[i][j];
    输入: 
    [
    [1,3,1],
    [1,5,1],
    [4,2,1]
    ]
    输出: 12
    解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
    */

    let dp = [];
    let rows = grid.length, columns = grid[0].length;
    for(let i = 0;i<rows;i++){
        for(let j = 0;j<columns;j++){
            if(!dp[i]){
                dp[i]= [];
            }
            dp[i][j] = Math.max(dp[i][j-1]||0,i>0 ?dp[i-1][j] :0) + (grid[i][j]||0);
        }
    }
    return dp[rows-1][columns-1];
};

maxValue([
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ])