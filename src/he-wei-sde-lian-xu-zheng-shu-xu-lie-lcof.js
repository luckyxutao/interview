/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    let i = 1; j = 2;
    let res = [];
    let sum = i;
    let temp;
    while (i < j && j <= target) {
        temp = sum + j;
        if (temp > target) {
            //把值
            sum -= i;
            i++;
        } else if (temp < target) {
            sum += j;
            j++;
        } else if (temp === target) {
            var subArr = [];
            //将窗口内元素放入结果

            for (let k = i; k <= j; k++) {
                subArr.push(k);
            }
            res.push(subArr);
            sum -= i;
            i++;
        }
    }
    return res;
};
// 1,2,3,4,5,6,7,8
const res = findContinuousSequence(9);
console.log(res);