
var maxSubArray = function(nums) {

    let max = -99999;
    let prevMax = -9999;
    for(let i =0;i<nums.length;i++){
        let cur = nums[i];
        prevMax = Math.max(prevMax+cur,cur);
        max = Math.max(prevMax,max);
    }
    return max;
};
console.log(maxSubArray([-1]))

/*

[-2,1, -3, 4,-1,2,1,-5,4]
[-2,1, -2, 4,3,5,6, 1,5]



*/