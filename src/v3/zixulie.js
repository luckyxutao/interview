/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    /*
        逐位比较是不是1
        n跟1与，n跟2 n跟4
    */
    let mask = 1;
    let count = 0;
    for(let i=0;i<32;i++){
        if((n & mask) == 1){
            count++;
        }
        mask <<=1;
    }
    return count;
};

hammingWeight(11)