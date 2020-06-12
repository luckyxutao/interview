/**
 * @param {string} str
 * @return {number}
 */
/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
    var i = 0;
    str = str.replace(/^\s+/, '');
    var res = 0;
    var cur;
    var sign = 1;//默认是正
    var firstChar = str.charAt(0);
    if (firstChar !== '+' && firstChar !== '-') {
        str = '+' + str;
    }
    while (i < str.length) {
        cur = str.charAt(i);
        if (i === 0 && (cur === '-' || cur === '+')) {
            sign = cur === '+' ? 1 : -1;
            i++;
            continue;
        }

        if (!/^\d$/.test(cur) && i > 0) {//如果不是数字，则中止
            break;
        }
        res = res * 10 + parseInt(cur, 10);
        i++;
    }
    
    res = res * sign;
    var MAX_VALUE = Math.pow(2, 31) - 1;
    var MIN_VALUE = Math.pow(2, 31) * -1
    if (res < MIN_VALUE) {
        return MIN_VALUE
    }
    if (res > MAX_VALUE) {
        return MAX_VALUE
    }
    return res;


};
// 4235=423*10+5
console.log(strToInt("-  234"));

console.log('5' * 10)