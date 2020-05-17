/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    var start = 0, end = nums.length - 1, mid;
    while (start < end) {
        mid = start + Math.floor((end - start) / 2);
        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else if (nums[mid] < nums[end]) {
            end = mid;
        } else if (nums[mid] === nums[end]) {//
            end--;
        }
    }
    return nums[end]

};


console.log(findMin([3,1,3]));