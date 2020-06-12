/**
 * @param {number} n
 * @return {number}
 * n>=5时
 */
var cuttingRope = function (n) {
    let reMax = 0;
    let resArr = [0,0,1,2,4];
    if(n<5){
        return resArr[n];
    }
    // let timesOf3 = 0;
    let res = 1;
    let mod = 1e9+7;
    while(n>=5){
        res = res % mod * 3;
        n = n - 3;
    }
    let res2 = res*n%mod;
    return res2;
};

console.log(cuttingRope(120));
