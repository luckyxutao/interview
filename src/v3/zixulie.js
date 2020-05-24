/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s){
        return s;
    }

    let i = 0, j = 0;
    let maxLen = 0;
    //win信息
    let winCount = {
        // a:1,
        // b:2
        // c:1
    }
    //win结束
    while(j<s.length){
        /*
            先加入窗口
        */
        let char = s.charAt(j);
        winCount[char] = (winCount[char]||0) +1
        j++;//本来是等于0的，走到加加后，变+1了

        //检查窗口
        while(winCount[char]>1){
            //调整左侧,最左边
            let leftChar = s.charAt(i);
            winCount[leftChar]--;
            i++;
        }
        //调整完毕，挪完窗口后，j++了，移到下一位置了
        maxLen = Math.max(maxLen,j-i);
    }
    return maxLen;
};

lengthOfLongestSubstring('abcabcbb')