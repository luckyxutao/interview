/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    if (!nums.length) {
        return res;
    }
    nums.sort((a, b) => a - b);
    //-4 -1 -1 0 1 2
    for (let i = 0; i < nums.length - 2; i++) {
        if(nums[i]>0){
            break;
        }
        if(nums[i]===nums[i-1]){
            continue;
        }
        let target = nums[i] * -1;

        let lo = i + 1, hi = nums.length - 1;
        while (lo < hi) {
            if(lo > i+1 &&nums[lo] === nums[lo-1] || hi < nums.length-1 && nums[hi] === nums[hi+1]){
                lo++;
                hi--
            }
            let sum = nums[lo]+nums[hi];
            if(target === sum){
                res.push([nums[i],nums[lo],nums[hi]]);
                hi--;
                lo++;
            } else if( sum > target){
                hi--;
            } else {
                lo++;
            }
        }
    }
    return res;

};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

/*
[ -4,-1,-1,0,1,2]
[-2,0,0,2,2]
*/