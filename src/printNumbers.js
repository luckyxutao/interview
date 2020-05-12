/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let res = [];
    for(let i=1,max=Math.pow(10,n);i<max;i++){
        res.push(i);
    }
    return res;
};

console.log(printNumbers(3))