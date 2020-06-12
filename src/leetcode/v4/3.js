/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    /*
    贪心
    */
    //dp[i]表示i个正整数数最大乘积
    let dp = [0, 0, 1, 2, 4];
    if (n < 5) {
        return dp[n];
    }
    //枚举所有结果
    for (let i = 5; i <= n; i++) {
        //5
        let tempMax = 0;
        for (let j = 1; j < n; j++) {
            // 1 * 4的4种情况，还有2*2的4种情况
            let N1 = j * (i - j);// 1* (5-1) =4
            let N2 = dp[j] * (i - j);
            let N3 = j * dp[i - j];
            let N4 = dp[j] * dp[i - j];
            tempMax = Math.max(tempMax, N1, N2, N3, N4);
        }
        dp[i] = tempMax;
    }
    console.log(dp)
    return dp[n];
};

integerBreak(10)