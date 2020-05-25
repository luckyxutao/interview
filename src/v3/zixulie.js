/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return n>=0 ? myPowHelper(x,n) : 1/ myPowHelper(x,-n)
};
function myPowHelper(x, n) {
    /*
        x x2  x4  x8   x16   x31  x64
        偶数时每个数的pow都等于 x(n/2)的平方
        比如转的是16

    */
    if(n == 0){
        return 1;
    }
    let y = myPow(x,n>>1);
    //因为是向下取整，规律是在偶数有效，奇数时少乘了个x
    return n%2 == 1 ? y*y*x : y*y;
};
console.log(myPow(2,16))