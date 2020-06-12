
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    var str = '';
    var temp = '';
    var i=0;
    while(i<s.length){
        temp = s.charAt(i);
        if(s.charAt(i)=== ' '){
            temp = '%20';
        }
        str += temp;
        i++;
    }
    return str;
};

var w = replaceSpace("We are happy.");
console.log(w);