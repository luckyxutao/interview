/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    var memo = new Map();
    return helper(memo,N);
};

function helper(memo,n){
    if(n<2){
        return n;
    }
    if(memo.has(n)){
        return memo.get(n);
    }
    var re = (helper(memo,n-1) + helper(memo,n-2)) % 1000000007;
    memo.set(n,re);
    return re;
}

console.log(fib(4));