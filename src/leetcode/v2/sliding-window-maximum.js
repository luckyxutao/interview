/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {

    let res = [];
    let lo = 0, hi = 0;
    let winArr = [];
    while (hi < nums.length) {
        /*
            新num放入入窗口
        */
        winArr.push(nums[hi]);
        hi++;
        if (winArr.length > k) {
            winArr.shift();
            lo++;
        }
        //窗口调整完毕，如果数量满足k的话
        if(winArr.length === k){
            res.push(Math.max.apply(null,winArr))
        }
    }
    return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))