/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let lo = 0, hi = nums.length - 1;
    //[]左右闭区间
    while (lo < hi) {
        let sum = nums[lo] + nums[hi]
        if( sum === target){
            return [nums[lo],nums[hi]];
        } else if(sum > target){//两边和大于target，应该左边收缩
            hi = hi-1;
        } else if( sum < target){
            lo = lo + 1;
        }
    }
    return -1;
};
let nums = [2, 7, 11, 15], target = 9;
console.log(twoSum(nums, target))