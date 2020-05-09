/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    let memoize = new Map();
    return helper(n,memoize);

};

function helper(n,memoize){
    if(memoize.has(n)){
        return memoize.get(n);
    }
    let max = -1;
    let prev;
    for (let i = 1; i < n; i++) {
        prev = i * integerBreak(n - i);
        //至少拆分成两个i*(n-i)，
        max = Math.max(max,prev, i*(n-i))
    }
    memoize.set(n,max);
    return max;
}

const re = integerBreak(10);
console.log(re);
//https://acm.taifua.com/archives/leetcode343.html
//https://coordinate.wang/index.php/archives/2271/
//https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/xiang-jie-bao-li-di-gui-ji-yi-hua-ji-zhu-dong-tai-/
        //      4

        // 1*3   2 * 2 3 *1