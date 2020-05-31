// /**
//  * @param {number} n
//  * @return {number}
//  */
// var nthUglyNumber = function(n) {
//     /*
//         M = dp[i-1];
//         dp[i] = min()
//     */
//     let dp = [1,2,3];
//     let M, M2 = 1, M3 = 1, M5 = 1;
//     let ptr2 = 0, ptr3 = 0, ptr5 = 0;
//     for(let i = 3;i<n;i++){
//         M = dp[i-1];
//         //一直乘以2会得到一个丑数，找到第一个比M大的
//         while(M2<= M){
//             M2 = dp[ptr2++]*2;
//         }
//         //一直乘以3会得到一个丑数，找到第一个比M大的
//         while(M3<=M){
//             M3= dp[ptr3++]*3;
//         }
//         while(M5<=M){
//             M5=dp[ptr5++]*5
//         }
//         dp[i] =  Math.min(M2,M3,M5)
//     }
//     return dp[dp.length-1];
// };

var isUgly = function(num) {
    let res = num;
    while(res % 2 == 0){
        res = res /2;
    }
    while(res % 3 == 0){
        res = res /3;
    }
    while(res % 5 == 0){
        res = res /5;
    }
    return res == 0 ? true : false;
};
isUgly(10)