/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //负数或个位是0 不可能是回文
    if(x < 0 || (x > 0 && x % 10 === 0)){
        return false;
    }

    let reverseNum = 0;
    //  1221
    //x是正整数,a>x说明已经处理了一半了
    while(reverseNum<x){
        reverseNum = reverseNum * 10 + (x % 10);
        x = Math.floor(x/10);
    }
    return x === reverseNum || x === Math.floor(reverseNum / 10);

    /*
    4 5 6
    0*10 + 4 = 4
    4*10 + 5 = 45
    45*10 + 6 = 456

    */
};

console.log(isPalindrome(0));
