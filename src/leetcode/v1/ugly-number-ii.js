/**
 * @param {number} n
 * @return {number}
 * https://www.zybuluo.com/liweiwei1419/note/1394376#leetcode-%E7%AC%AC-264-%E9%A2%98264-%E4%B8%91%E6%95%B0-ii
 */
var nthUglyNumber = function (n) {
    let dp = [1, 2, 3];
    /*
        M 当前dp里最大丑数，是要找比M大的
        M2 从最能满足条件的小丑数开始都*2，第1个大于M的丑数
        M3 从最能满足条件的小丑数开始都*3，第1个大于M的丑数
        M5 从最能满足条件的小丑数开始都*5，第1个大于M的丑数
        dp[i] = min(M2,M3,M5);
    */
    let M, M2 = 1, M3 = 1, M5 = 1;
    let ptr2 = 0, ptr3 = 0, ptr5 = 0;
    for (let i = 3; i < n; i++) {
        M = dp[i - 1];//当前最大丑数，目标找大于dp[]
        //从ptr2开始都*2，找到第一个比M大的丑数
        while (M2 <= M) {
            M2 = dp[ptr2++] * 2;
        }
        //从ptr3开始都*3，找到第一个比M大的丑数
        while (M3 <= M) {
            M3 = dp[ptr3++] * 3;
        }

        //从ptr5开始都*5，找到第一个比M大的丑数
        while (M5 <= M) {
            M5 = dp[ptr5++] * 5;
        }
        dp[i] = Math.min(M2,M3,M5);//找到最小元素(离M最近)
    }
    return dp[n - 1];
};

console.log(nthUglyNumber(12));
// var a = [1,2,3,4,5];
// console.log(a.slice(2)
