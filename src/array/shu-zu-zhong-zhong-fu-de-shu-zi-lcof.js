// 找出数组中重复的数字。
// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
/**
 * 利用抽屉原理
 * 长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    if (nums.length < 2) {
        return -1;
    }
    for (let i = 0; i < nums.length; i++) {
        while (i !== nums[i]) {//0,2
            if(nums[nums[i]] === nums[i]){//某个nums[nums[i]]和nums[i]相等说明重复了
                return nums[i]
            }
            swap(nums, i, nums[i])
        }
    }
    return -1
};

function swap(num, fromIndex, toIndex) {
    if (fromIndex === toIndex) {
        return;
    }
    var temp = num[fromIndex];
    num[fromIndex] = num[toIndex];
    num[toIndex] = temp;
}

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))