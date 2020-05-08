/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let res = [];
    dfsHelper(nums, 0, res);
    console.log(res)
};

function dfsHelper(nums, i, res) {
    if (nums.length === i) {
        console.log(res);
        return;
    }
    while (i < nums.length) {
        res.push(nums[i]);
        dfsHelper(nums, i + 1, res);
        res.pop();
        i++;
    }
}

lengthOfLIS([1, 4, 3, 4,2,3])
// lengthOfLIS([1, 2, 3, 4])