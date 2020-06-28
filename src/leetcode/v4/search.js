/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s){
        return 0;
    }
    /*
    winInfo ={
        a : 1,
        b : 2,
        c : 1
    }
    abcabc b b
    [a,b,c,b]
    */
    let lo = 0, hi = 0;
    let maxRes = 0;
    let win = {};
    while(hi<s.length){
        let c = s.charAt(hi)
        win[c] = (win[c] || 0 )+ 1
        //放入窗口
        hi++;//已经是1了
        //调整窗口
        while(win[c] > 1){
            let leftC = s.charAt(lo);
            win[leftC]--;
            lo++;
        }
        maxRes = Math.max(maxRes,hi-lo);
    }
    return maxRes;
};
lengthOfLongestSubstring("abcabcbb")