/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n = 365) {
    //如果 n 小于 10 ，直接返回就可以了
    if (n < 10) {
        return n;
    }
    //1. 计算第365位所在的target有几位数(不是365的位数)
    let digtis = 0;
    let sum = 0;
    let nextStep;
    let baseNum = 0;
    while (sum <= n) {
        // 9*1 + 90*2 + 900 * 3
        nextStep = Math.pow(10,digtis)*9*(digtis+1);
        sum = sum + nextStep;
        //0,10,100,1000,10000
        baseNum = Math.pow(10,digtis);;
        digtis++;
    }
    // 循环条件结束后，是多加了一次(我们需要前一次的和)
    sum = sum - nextStep;

    //减去最小值（100）之前的位数，从最小值（100）开始
    let rest = n - sum;
    baseNum -= 1; //100也算在内，所以需要减1
    //2. 计算targetNum数字
    let targetNum = baseNum + Math.ceil(rest / digtis);
    //3.通过余数得知在targetNum第几位
    let mod = rest % digtis;
    // //如果idx为0，则是该group最后一个数字，否则mod-1就是位置
    // /** 100
    //  * [1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18]
    //  * 9/3 = 3 =>3 %3 = 0
    //  * 8/3 = 2.666=>3  8 % 3 = 2
    //  * 7/3 = 2.33=>3 7%3 = 1
    // */
    targetNum = targetNum + ''
    if (mod === 0) {
        return targetNum[targetNum.length - 1]
    } else {
        return targetNum[mod - 1]
    }
};
console.log(findNthDigit(100));


// var findNthDigit = function (n = 365) {
//     //如果 n 小于 10 ，直接返回就可以了
//     if (n < 10) {
//         return n;
//     }
//     //1. 计算第365位所在的target有几位数(不是365的位数)
//     let digtis = 0;
//     let cacheN = 0;
//     while (cacheN <= n) {
//         // 9*1 + 90*2 + 900 * 3
//         let step = Math.pow(10,digtis)*9*(digtis+1);
//         cacheN = cacheN + step;
//         digtis++;
//     }
//     //     计算小于digits-1位的相关信息
//     //        计算target位数最小值(baseNum=10,100,100...)
//     //        计算target位数最小值之前的位数和(9+180+...)直到100
//     //         如: target是3位的话小值是100
//     //         如: target是3位的话要知道小于3位的位数和(9+180 =>189)
//     //
//     let i = 0;
//     let sum = 0;
//     let baseNum = 0;
//     while (i < digtis -1) {
//         // (1/10/100) * 1,2,3
//         sum = sum + Math.pow(10, i) * 9 * (i+1);
//         baseNum = Math.pow(10, i);
//         i++;
//     }
//     //减去最小值（100）之前的位数，从最小值（100）开始
//     let rest = n - sum;
//     baseNum -= 1; //100也算在内
//     //2. 计算targetNum数字
//     let targetNum = baseNum + Math.ceil(rest / digtis);
//     //3.通过余数得知在targetNum第几位
//     let mod = rest % digtis;
//     //如果idx为0，则是该group最后一个数字，否则mod-1就是位置
//     /**
//      * [1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18]
//      * 9/3 = 3 =>3 %3 = 0
//      * 8/3 = 2.666=>3  8 % 3 = 2
//      * 7/3 = 2.33=>3 7%3 = 1
//     */
//     targetNum = targetNum + ''
//     if (mod === 0) {
//         return targetNum[targetNum.length - 1]
//     } else {
//         return targetNum[mod - 1]
//     }
// };