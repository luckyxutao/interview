/**
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    //dp[i]表示以i结尾最长子序列的个数，不包括等于
    let dp = [];
    let tempMaxRes = 0;
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        tempMaxRes = 0;
        for (let j = 0; j < i; j++) {
            let prevSiblin = nums[j];
            if (prevSiblin < cur) {
                tempMaxRes = Math.max(dp[j], tempMaxRes);
            }
        }
        dp[i] = tempMaxRes + 1;
    }
    let maxLen = 0;
    for (let i = 0; i < dp.length; i++) {
        maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;
};
// lengthOfLIS([2, 5, 3, 7, 101, 18])
const re = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
console.log(re);

// lengthOfLIS([1, 2, 3, 4])
/**
 * 0   1  2  3  4  5   6   7
 * 10, 9, 2, 5, 3, 7, 101, 18
 * 1 , 1, 1, 2  2
 *
 */