/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let ans = -99999;
    for (let i = 0; i < nums.length - 2; i++) {
        let lo = i + 1, hi = nums.length - 1;
        while (lo < hi) {
            let sum = nums[lo] + nums[hi] + nums[i];
            if(Math.abs(target-sum) < Math.abs(target-ans)){
                ans = sum;
            }
            if(sum <= target){
                lo++;
            } else {
                hi--;
            }
        }
    }
    return ans;
};

const nums = 
[-1,2,1,-4], target = 1;
console.log(threeSumClosest(nums, target));
