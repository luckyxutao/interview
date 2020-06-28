/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(!nums||!nums.length){
        return 0
    }

    let lo = 0, hi = 0;
    let maxRes = 1;
    while(hi<nums.length){
        //窗口右移
        hi++;
        
        if(hi=== nums.length){
            break;
        }
        //调整窗口
        if(nums[hi]<=nums[hi-1]){
            lo = hi;
        }
        maxRes = Math.max(maxRes,hi-lo+1);
    }
    return maxRes;
};

console.log(findLengthOfLCIS([1]));
