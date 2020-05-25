/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.trim();
    let i = 0;
    let tempStr = '';
    let arr = [];
    while(i<str.length){
        //从非空开始，到空了结束
        while(i<str.length && str.charAt(i)!==' '){
            tempStr+=str.charAt(i);
            i++;
        }
        arr.unshift(tempStr);
        tempStr = '';
        //从空开始，到非空结束，跳过空格
        while( i<str.length && str.charAt(i)==' '){
            i++;
        }
    }
    return arr.join(' ')
};

console.log(reverseWords("the sky is blue"));
