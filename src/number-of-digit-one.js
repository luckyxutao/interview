/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    let count = 0;
    let strN = n+'';
    if(n<=0){
        return 0;
    }
    if(!strN.length){
        return 0;
    }
    let first = strN.charAt(0);
    let length = strN.length;
    if (length === 1 && first == 0) {
        return 0;
    }
    if (length == 1 && first == 1) {
        return 1;
    }

    let numFirstDigit = 0;
    if(first > 1){
        numFirstDigit = Math.pow(10,length-1);
    } else {
        numFirstDigit = parseInt(strN.slice(1),10) + 1;
    }
    let numberOtherDigits = first *(length-1)* Math.pow(10,length-2);
    let numberRecursive = countDigitOne(strN.slice(1));
    return numFirstDigit + numberOtherDigits + numberRecursive;
};

console.log(countDigitOne(101));


// /**
//  * @param {number} n
//  * @return {number}
//  */
// var countDigitOne = function(n) {
//     let count = 0;
//     for(let i = 1;i<=n;i++) {
//         var cur = i.toString();
//         var replaced = cur.replace(/1/g,'');
//         var len = cur.length - replaced.length;
//         count+=len;
//     }
//     return count
// };