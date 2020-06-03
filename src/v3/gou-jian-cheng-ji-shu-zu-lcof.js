/**
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function(n) {
    /*
    以n=6
    1. n个骰点数和区间(n,6n)
    2. n个骰点数所有组合 = Math.pow(6,n);
    3. dp[i] i表示n个骰子和为i组合的次数

    思路:
        1. 枚举n个骰子和为i组合
    */
    let maxNum = 6*n;
    let allNum = Math.pow(6,n);
    let res = [];
    let memo = new Map();
    for(let i = n; i<=maxNum;i++){
        //求出n个骰子点数和为i, 6个骰子凑成6、7
        let times = helper(n,i,memo)
        res.push(times/allNum)
    };
    return res;
};
//骰子数(n),和为s
//6个骰子，凑6，有几种凑法
function helper(n,s,map){
    if(s<n || s > 6*n){
        return 0
    }
    let key = `${n}_${s}`;
    if(map.has(key)){
        return map.get(key);
    }
    //中止条件,只有一个骰子时，则只有1种摆法
    if(n==1){
        return 1;
    }
    let res = 0;
    for(let i = 1; i<=6;i++){
        res = res  + helper(n-1,s-i,map)
    }
    map.set(key,res);
    return res;
}
twoSum(6)