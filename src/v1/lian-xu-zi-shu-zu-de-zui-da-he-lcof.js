/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    return helper(nums, 0, nums.length - 1);

};

/**
 * for循环变量i是从mid开始，递减直至到达low,
 * 因此，它所考察的每个子数组都具有A[i..mid]的开始，
 * 从左往右的话很多子集都可能不包括mid（值确可能是最大的了）
 * 
 * 
 */
function getCrossSum(nums, left, right, mid) {
    if (left == right) return nums[left];

    let leftSubsum = 99999999*-1;
    let currSum = 0;
    //为什么需要从mid往low遍历，因为每个子集都要包括mid,从左往右的话可能最大值（没包含mid)
    for (let i = mid; i >= left; i--) {
        currSum += nums[i];
        leftSubsum = Math.max(leftSubsum, currSum);
    }

    let rightSubsum = 99999999*-1;
    currSum = 0;
    //每个子数组都具有A[mid+1,...]
    for (let i = mid + 1; i <= right;i++) {
        currSum += nums[i];
        rightSubsum = Math.max(rightSubsum, currSum);
    }

    return leftSubsum + rightSubsum;

}
function helper(nums, left, right) {
    if (left === right) {
        return nums[left];
    }
    let mid = left + Math.floor((right - left) / 2);
    let left_sum = helper(nums, left, mid);
    let right_sum = helper(nums, mid + 1, right);
    let cross_sum = getCrossSum(nums, left, right, mid);
    return Math.max(left_sum, Math.max(right_sum, cross_sum));
}
// var maxSubArray = function(nums) {
//     var max = 0;
//     var sum = 0;
//     var res = [];
//     for(let i=0;i<nums.length;i++){
//         sum = 0;
//         for(let j=i;j<nums.length;j++){
//             res.push(nums.slice(i,j))
//             sum += nums[j];
//             if(sum > max){
//                 max = sum;
//             }
//         }
//     }
//     return max;
// };
var re = maxSubArray([-2, -1]);
console.log(re);
