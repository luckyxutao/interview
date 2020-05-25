/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    let res = { count: 0 };
    let visited = [];
    dfsHelper(m, n, k, 0, 0, visited, res);
    return res.count;
};

function dfsHelper(m, n, k, i, j, visited, res) {
    //检查边界
    if (i < 0 || j < 0 || i >= m || j >= n) {
        return;
    }
    //检查和是否为k
    let sum = calSum(i) + calSum(j);
    if (sum > k) {
        return;
    }
    //说明访问过了
    if (visited[i] && visited[i][j]) {
        return;
    }
    //记录数量
    res.count++;
    //记下位置
    if (!visited[i]) {
        visited[i] = [];
    }
    visited[i][j] = true;
    //向右搜索
    dfsHelper(m, n, k, i, j + 1, visited, res);
    //向下搜索
    dfsHelper(m, n, k, i + 1, j, visited, res);
    //向左搜索
    dfsHelper(m, n, k, i, j - 1, visited, res);
    //向上搜索
    dfsHelper(m, n, k, i - 1, j, visited, res);
    // visited[i][j] = false;

}

function calSum(num) {
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(movingCount(3, 2, 17))


