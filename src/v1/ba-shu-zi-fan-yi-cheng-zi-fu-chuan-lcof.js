/**
 * @param {number} num
 * @return {number}
 * https://www.hegongshan.com/2020/03/14/coding-interview-46-translate-number-into-string/
 */
var translateNum = function (num) {
    let str = num + '';
    let res = dfsHelper(str, 0);
    return res;
};

function dfsHelper(str, i) {
    //中止条件
    if (i === str.length) {
        return 1;
    }
    let dual = parseInt(str.slice(i, i + 2), 10);
    if (dual >= 10 && dual <= 25) {
        return dfsHelper(str, i + 1) + dfsHelper(str, i + 2)
    } else {
        return dfsHelper(str, i + 1);
    }
}
/*
   0  1  2  3   4
   1  2  2  5   8

*/
console.log(translateNum(25));
// let str = '12258'
// console.log(str.slice(1,1+1));

/**
 * 12258
 * fn = f
 *
 *
 */