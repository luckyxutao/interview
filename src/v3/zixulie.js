
var sumNums = function(n) {
    /*
        递归 1+2+3+4
        n = (n-1) + 1
    */

    return (n && sumNums(n-1) + n )|| 0;
};

console.log(sumNums(3))