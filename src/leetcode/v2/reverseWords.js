/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.trim();
    let i = 0;
    let tempStr = []
    let arr = [];
    while(i<str.length){
        while(i<str.length && str.charAt(i)!== ' '){
            tempStr.push(str.charAt(i));
            i++;
        }
        if(tempStr.length > 0){
            arr.unshift(tempStr.join(''));
            tempStr.length = 0;
        }
        while(i<str.length && str.charAt(i) === ' '){
            i++;
        }
    }
    return arr.join(' ')
};

console.log(reverseWords("the sky is blue"));