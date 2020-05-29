/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
    //n等于1时肯定是0
    let res = 0;
    //自底向上
    for(let i = 1;i<=n;i++){
        res = (res + m) % i;
    }
    return res;
};

function helper(n, m) {
    if (n == 1)
        return 0;
    let x = helper(n - 1, m);
    return (m + x) % n;
}
console.log(lastRemaining(70866, 116922))