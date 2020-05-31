/**
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function (n) {
    /*
        3个骰子，最小点数(3*1)最大点数是3*6=18
        找到和为s =所有组合(6个骰子)
        所有组合范围是Math.pow(6,3) =216种组合
    */
    let total = Math.pow(6, n);
    let res = [];
    let maxSum = 6 * n;
    let memo = new Map();
    //范围是 [n,6n]=[3,18]
    for (let i = n; i <= maxSum; i++) {
        //计算 n个骰子和为i的所有组合
        let s = helper(i, n,memo);
        let rate = s / total;
        res.push(rate);
    }
    return res;
};
/**
 * @s 和
 * @n 骰子数量
 */
function helper(s, n,memo) {
    let key = `${s}_${n}`;
    if(memo.has(key)){
        return memo.get(key);
    }
    //3， 3
    /*
        和不能小于n，也不能大于6n
        3, [3, 3*6]
        3, 5
    */
    if (s < n || s > 6 * n) {
        return 0;
    }
    //如果只有1个骰子，只能有一种选择
    if (n == 1) {
        return 1;
    }
    let res = 0;
    for (let i = 1; i <= 6; i++) {
        // fn(3,6) = helper(n-1,n-i);
        /*
        */
        //下轮递归  和减去当前i, 骰子数-1
        res = res + helper(s - i, n - 1,memo);
    }
    memo.set(`${s}_${n}`,res);
    return res;

}



twoSum(3)










