/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let res = [];
    /*
    1. 连续子集，连续字符串，首先想到滑动窗口
    */
    let lo = 1, hi = 1;
    let winArr = [];
    let winSum = 0;//用来记录窗口sum
    //不等于target,至少2个数
    while(hi<target){
        //向右增大窗口
        winSum+= hi;
        winArr.push(hi);
        hi++;
        //调整窗口
        while(winSum > target){
            //调整窗口左侧
            winSum-= lo;
            lo++;
            winArr.shift();
        }
        //从窗口提取有用信息
        if(winSum === target){
            res.push(winArr);
        }
    }
    return res;
};

findContinuousSequence(9);