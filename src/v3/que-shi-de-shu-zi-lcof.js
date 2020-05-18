/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    /*
        1. 索引和值相同，并且是升序，根据这个特点来二分查找
        2. 如果最后一个值也和索引相同，则结果是下一个元素
    */
    /*
     判断定第二种情况，
    */
    let last = nums[nums.length - 1]
    if (last === nums.length - 1) {
        return last + 1;
    }
    let start = 0, end = nums.length - 1, mid;
    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);
        if (nums[mid] == mid) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return start;
};
console.log(missingNumber([1]))
// console.log(missingNumber([0, 1, 2]))
/*
   7 /2 = 3
 0   end = 2
  start = 1, end = 2

*/