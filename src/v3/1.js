function cutRope(number)
{
    /*
        枚举所有和为i的结果，从中找到最大的
    
    */
    let dp = [0,0,1,2];
    for(let i = 4;i<=number;i++){
        /*
        1. 枚举所有和为4的，组合 找到最大的
        */
        let tempMax = 0;
        for(let j =1;j<i;j++){
            //都不拆分
            let res1 = j*(i-j);
            //都拆
            let res2 = dp[j]*dp[j-i];
            //左拆 右不拆分
            let res3 = dp[j]*(i-j);
            // 左不拆 右拆分
            let res4 = j* dp[i-j];
            tempMax = Math.max(tempMax,res1,res2,res3,res4);
        }
        dp[i] = tempMax;
    }
    return dp[number];
}
cutRope(4)