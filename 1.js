/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    if (!grid.length) {
        return;
    }
    /*
    该格子最大值
    dp[i][j] = Max(dp[i-1][j], dp[i,j-1]) + grid[i][j]
    */
    let dp = [];
    let rowLen = grid.length, colLen = grid[0].length;
    for (let i = 0; i < rowLen; i++) {
        if (!dp[i]) {
            dp[i] = [];
        }
        for (let j = 0; j < colLen; j++) {
            dp[i][j] = grid[i][j] + (i == 0 ? 0 : Math.max(dp[i - 1][j] || 0, dp[i][j - 1] || 0));
        }
    }
    return dp[rowLen - 1][colLen - 1];
};
