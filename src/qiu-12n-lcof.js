/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
    // n 为0时，结果是false,表达式的值为0
    return n && n + sumNums(n - 1);
};

// console.log(sumNums(4))
   
// 0 1 2 3 4

var s = 0 || false; // false;
var t = 0 && 2 ; // 0 
console.log(t);
