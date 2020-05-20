/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    if(!s){
        return ' '
    }
    let map = new Map();
    let i = 0;
    let char;
    //利用map存放每个char的count
    while(i<s.length){
        char = s.charAt(i);
        if(!map.has(char)){
            map.set(char,1)
        } else {
            let count = map.get(char);
            map.set(char,count+1)
        }
        i++
    }
    for([key,value] of map){
        if(value == 1){
            return key;
        }
    }
};

firstUniqChar('leetcode')