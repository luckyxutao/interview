/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let m1Len = num1.length, m2Len = num2.length;
    let res = [];
    /*
        0   1   2     1  2   3
            0   1        4   5
    */
    for (let i = m1Len - 1; i >= 0; i--) {
        for (let j = m2Len - 1; j >= 0; j--) {
            let mul = num1.charAt(i) * num2.charAt(j);
            let p1 = i + j, p2 = i + j + 1;
            /*
                8  0
                7
                5
            */
            let sum = mul + (res[p2] || 0);
            res[p2] = sum % 10;
            res[p1] = Math.floor(sum / 10) + (res[p1] || 0);
        }
    }
    let i = 0;
    while (res.length && res[0] === 0) {
        res.shift();
    }
    return i == res.length ? '0' : res.join('')
};
multiply('123', '45')
// 1  2   3
//    4   5