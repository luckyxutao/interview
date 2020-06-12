/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    let dp = []
    dp[1] = 0;
    dp[2] = 1;
    dp[3] = 2;
    //dp[i]表示数字i的最大乘积
    /*
        1 = 0 + 1 = 0
        2 = 1 + 1 = 1
        3 = 1+2 = 2;
        8 = 3 + 5
            = 拆3*拆5
        dp[8] = max(dp[3]*dp[5], 3*5,dp[3]*5,dp[5]*3)
    */
   let res = 0;
    for (let i = 4; i <= n; i++) {
        let tempMax = 0;
        //枚举所有可能性，记住最大值2+2=4
        for (let j = 1; j < i; j++) {
            //1*(4-1), 2*(4-2), 3*(4-3)
            let cheng1 = j * (i - j);
            let cheng3 = j * dp[i-j];
            let cheng2 = dp[j]*(i-j);
            let cheng4 = dp[j]*dp[i-j];
            tempMax = Math.max(tempMax,cheng1,cheng2,cheng3,cheng4)
        }
        dp[i] = tempMax;
    }
    console.log(dp[dp.length-1]);
    
};

cuttingRope(10);

// 10 = 1 + 9, 2 + 8, 3 + 7 3 +3 + 1