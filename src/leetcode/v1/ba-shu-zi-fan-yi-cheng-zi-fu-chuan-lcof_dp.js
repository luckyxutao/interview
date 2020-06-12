/**
 * @param {number} num
 * @return {number}
 * https://www.hegongshan.com/2020/03/14/coding-interview-46-translate-number-into-string/
 * https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/solution/bi-ji-jin-hua-ban-tai-jie-wen-ti-by-user6439w/392262/
 */
var translateNum = function (num) {
    let str = num + '';
    // dp[i] = dp[i-1] + dp[i-2];
    //12258
    //表示第i位次数次数和
    //d[0]为1，表示空字符和str[0]只有一种
    let dp = [1, 1];
    for (let i = 1; i < str.length; i++) {
        let tmp = parseInt(str.slice(i - 1, i + 1), 10) || 0;
        if (tmp >= 10 && tmp <= 25) {
            dp[i + 1] = dp[i] + dp[i - 1];
        } else {
            dp[i + 1] = dp[i];
        }
    }
    return dp[dp.length - 1];
};

// function dfsHelper(str, i) {
//     //中止条件
//     if (i === str.length) {
//         return 1;
//     }
//     let dual = parseInt(str.slice(i, i + 2), 10);
//     if (dual >= 10 && dual <= 25) {
//         return dfsHelper(str, i + 1) + dfsHelper(str, i + 2)
//     } else {
//         return dfsHelper(str, i + 1);
//     }
// }
/*
   0  1  2  3   4
   1  2  2  5   8

*/
console.log(translateNum(25));
// let str = '12258'
// console.log(str.slice(1,1+1));

/**
 * 12258
 * fn = f
 *
 *
 */