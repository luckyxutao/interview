/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    /*
    1. 不能重复元素，同一位置元素在同一字符串不能重复使用
    2. s可能有重复，因此还需要set
    3. 回溯法

    */
    let res = new Set();
    let path = [];
    let visited = []
    dfsHelper(s, path, visited, res);
    return Array.from(res);
};

function dfsHelper(s, path, visited, res) {
    //如果满足条件了
    if (path.length === s.length) {
        res.add(path.join(''));
        return;
    }
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (visited[i]) {
            continue
        }
        visited[i] = true;
        path.push(char);
        dfsHelper(s, path, visited, res);
        path.pop();
        visited[i] = false;
    }
}

console.log(permutation('abc'));