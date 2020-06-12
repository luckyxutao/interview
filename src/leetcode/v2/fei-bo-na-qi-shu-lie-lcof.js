/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    //0,1,2,3,5,8,13
    let prev0 = 0;
    let prev1 = 1;
    let res = 0;
    for(let i = 2;i<=n;i++){
        res =  (prev0 + prev1) %(1e9+7)
        prev0 = prev1;
        prev1 = res
    }
    return res
};
const startTime = Date.now();
const res = fib(45);
let endTime = Date.now();
console.log(res, '时间:' + (endTime-startTime))

/*
    1. 直接递归(44)
    701408733 时间:7997
    时间：O(2^n),空间O(1)
    2. 备忘录(44)
    701408733 时间:0
    时间:O(n),空间O(n)
    3. 动态规划，自底向上
    701408733 时间:0
    时间:O(n),空间O(1)
*/

//备忘录
// let memoize = new Map();
// var fib = function(n) {
//     if(memoize.has(n)){
//         return memoize.get(n);
//     }
//     if(n<2){
//         return n;
//     }
//     let re = fib(n-1) + fib(n-2);;
//     memoize.set(n,re);
//     return re;
// };


//递归
// var fib = function(n) {
//     if(n<2){
//         return n;
//     }
//     return fib(n-1)+fib(n-2);
// }