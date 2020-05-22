/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    /*
        9
        1. [1,2,3,4,5,6,7,8] 从[1,target-1]
        let
    */
   let res =[]
    let lo = 1, hi = 1;
    let subArr = [];//窗口
    let tempSum = 0; //用来判断窗口是否合法的
    while(hi <= target){
        //1.先放入窗口里，再做判断
        subArr.push(hi);
        tempSum += hi;//加上新数
        hi++;
        //已经右移完毕

        //判断当前窗口值是否满足，不满足则需要从low开始清理
        while(tempSum > target){
            //从左开始减
            tempSum -= lo;//减一个
            subArr.shift();//从最左去掉一个元素
            lo++;//指针右移
        }
        if(tempSum === target){
            res.push([...subArr]);
        }
    }
    return res;
};

console.log(findContinuousSequence(9));