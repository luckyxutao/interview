/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    var map = new Map();

    for(let i=0;i<s.length;i++){
        var cur = s.charAt(i);
        if(map.has(cur)){
            map.set(cur,false);
        } else {
            map.set(cur,true);
        }
    }

    for([key,value] of map){
        if(value){
            return key;
        }
    }

    return ' '
};

console.log(firstUniqChar("leetcode"))