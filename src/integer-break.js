/**
 * 动态规划
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    //dp表示长为i段最大乘积
    let dp = [0, 0, 1, 2];//dp[0,1,2]
    let res = 0;
    for (let i = 4; i <= n; i++) {
        let tempMax = 0;
        //拆分成两个的乘积，
        for (let j = 1; j < i; j++) {
            //已经能拿到前边元素的最大成绩合了
            //当前元素拆分成两个数、小于i所有的dp[j],拆分后两个数dp
            tempMax = Math.max(res, j * (i - j),dp[j], j * dp[i - j]);
            res = Math.max(res, (tempMax || 0));
        }
        //很有可能本次最大的都没有之前的大，所以还要比较下
        dp[i] = res;
    }
    return dp[n]
    // 1 2 3 4 d[5] = d[2]*dp[3]
};
// 0 1 2 3 4 5  6  7
//[0,0,1,2,4,6, 9,12]
const re = integerBreak(8);
console.log(re);

/**
 * 1 * 4,2 * 3 3 * 2 4 * 1
 *
 *
 *
 *
 */


// console.log(re);
//https://acm.taifua.com/archives/leetcode343.html
//https://coordinate.wang/index.php/archives/2271/
//https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/xiang-jie-bao-li-di-gui-ji-yi-hua-ji-zhu-dong-tai-/
        //      4

        // 1*3   2 * 2 3 *1

//递归备忘录
// var integerBreak = function (n) {
//     let memoize = new Map();
//     return helper(n,memoize);

// };

// function helper(n,memoize){
//     if(memoize.has(n)){
//         return memoize.get(n);
//     }
//     let max = -1;
//     let prev;
//     for (let i = 1; i < n; i++) {
//         prev = i * integerBreak(n - i);
//         //至少拆分成两个i*(n-i)，
//         max = Math.max(max,prev, i*(n-i))
//     }
//     memoize.set(n,max);
//     return max;
// }