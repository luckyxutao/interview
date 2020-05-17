/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    var str =[...s];
    var res = [];
    var i = 0;
    var tempStr = '';
    while(i<str.length){
        if(str[i] === ' '|| i=== str.length-1){
            if(i=== str.length-1){
                tempStr+=str[i];
            }
            if(tempStr.trim().length){
                res.unshift(tempStr);
                tempStr='';
            }
        } else {
            tempStr+=str[i];
        }
        i++;
    }
    // res.unshift(tempStr); //最后一组是没有str[i]等于空的
    return res.join(' ')
};

console.log(reverseWords("the sky is blue"));