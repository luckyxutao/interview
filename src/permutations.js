/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];
    let path = [];
    let visited = [];
    dfsHelper(nums, path, 0, res, visited);
    return res;
};

function dfsHelper(nums, path, start, res, visited) {
    if (start === nums.length) {
        res.push([...path])
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if(visited[i]){
            continue;
        }
        visited[i] = true;
        path.push(nums[i]);
        dfsHelper(nums, path, start + 1, res, visited);
        path.pop();
        visited[i] = false;
    }
}

console.log(permute([1, 2, 3]))