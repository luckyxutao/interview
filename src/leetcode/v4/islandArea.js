/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    if (!grid || !grid.length) {
        return;
    }
    let rowLen = grid.length, colLen = grid[0].length;
    let maxArea = 0;
    let res = { count :0}
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            res.count = 0;
            dfsHelper(grid, [], i, j, res);
            maxArea = Math.max(maxArea, res.count);
        }
    }
    return maxArea;
};

function dfsHelper(grid, path, i, j, res) {
    //中止条件
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
        return;
    }
    if (grid[i][j] === 0) {
        return
    }
    grid[i][j] = 0;
    res.count++;
    //
    dfsHelper(grid, path, i, j + 1, res);
    dfsHelper(grid, path, i + 1, j, res);
    dfsHelper(grid, path, i - 1, j, res);
    dfsHelper(grid, path, i, j - 1, res);
    // grid[i][j] = 1;
}
let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,1,1,0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,1,1,0,0,1,0,1,0,0],
            [0,1,0,0,1,1,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,1,1,0,0,0,0]]
maxAreaOfIsland(grid)