/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    if (nums[nums.length - 1] === nums.length - 1) {
        return nums.length;
    }
    var start = 0, end = nums.length - 1, mid;
    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === mid) {//说明小于mide的是不缺少的
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return start; //start已经大于end了
};

// console.log(missingNumber([0,1]));
console.log(missingNumber([0, 1, 2, 3, 4, 5,6, 7, 8, 9]));