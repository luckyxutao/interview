/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let i = 0;
    let newStr = '';
    let len = s.length;
    for(let i = n;i<len + n;i++){
        newStr = newStr + s.charAt(i%len)
    }
    return newStr
};
console.log(reverseLeftWords('abcdefg',2))