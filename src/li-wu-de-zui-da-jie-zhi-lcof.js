/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    // f(i, j) = Max(f(i - 1, j), f(i, j - 1)) + grid[i][j]
    /*

        [
            [1,2,5],
            [3,2,1]
        ]
        00 01 02
        10 11 12
    */
    let dp = [];
    let columnLen = grid[0].length;
    let rowLen = grid.length;
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < columnLen; j++) {
            let top = dp[i - 1] && dp[i - 1][j] || 0;
            let left = dp[i] && dp[i][j - 1] || 0;
            if (!dp[i]) {
                dp[i] = [];
            }
            dp[i][j] = grid[i][j] + Math.max(top, left);
        }
    }
    return dp[rowLen - 1][columnLen - 1];

};

function helper(grid, i, j, res) {
    //判断是否越界
    if (i < 0 || j < 0) {
        return 0
    }
    return Math.max(helper(grid, i - 1, j), helper(grid, i, j - 1)) + grid[i][j];
}

var grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];
console.log(maxValue(grid));




// var maxValue = function (grid) {
//     // for (let i = 0; i < grid.length; i++) {
//     //     let row = grid[i];
//     //     for (let j = 0; j < row.length; j++) {
//     //         console.log(i,j);
//     //     }
//     // }
//     let res = helper(grid, grid.length - 1, grid[0].length - 1);
//     console.log(res);

// };

// function helper(grid, i, j, res) {
//     //判断是否越界
//     if (i < 0 || j < 0) {
//         return 0
//     }
//     return Math.max(helper(grid, i - 1, j), helper(grid, i, j - 1)) + grid[i][j];
// }
