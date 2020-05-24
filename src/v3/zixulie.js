/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

    let hi = 0;
    let resMax = [];
    //win信息
    let winArr = [];
    //win结束
    //右边快，会先到length
    while(hi<nums.length){
        //新新元素放入窗口
        winArr.push(nums[hi]);
        hi++;
        //后边用时要注意
        //检查窗口
        while(winArr.length > k){
            winArr.shift();
        }
        if(winArr.length == k){
            resMax.push(Math.max.apply(null,winArr));
        }
    }
    return resMax;
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))
