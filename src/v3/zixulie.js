/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    /*
        滑动窗口(快慢)
        lo = 1, hi = target
    */
    let i = 0, j = 1;
    let res = [];
    /*
        win信息
    */
    //窗口元素
    let winArr = [];
    //窗口和
    let winSum = 0;
    //win信息结束
    while (j < target) {
        //往窗口放元素(1.数组添加元素，2. winSum跟上)
        winArr.push(j);
        winSum += j;
        j++;
        //调整及检查窗口，如果超出target，则要一直缩小左边
        while (winSum > target) {
            //最左边
            let low = winArr[i];
            winArr.shift();
            winSum -= low;
            i++;
        }
        //窗口调整完毕
        if (winSum == target) {
            res.push([...winArr])
        }
    }
    return res;
};

console.log(findContinuousSequence(9));