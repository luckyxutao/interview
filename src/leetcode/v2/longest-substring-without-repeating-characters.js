/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let lo = 0, hi = 0;
    let window = {}
    let res = 0;
    while (hi < s.length) {
        //新元素是肯定要入窗口的
        let c = s.charAt(hi);
        hi++;
        window[c] = (window[c] || 0) + 1
        // 判断左侧窗口是否要收缩
        while (window[c] > 1) {
            let d = s.charAt(lo);
            lo++;
            // 进行窗口内数据的一系列更新
            window[d]--;
        }
        res = Math.max(res, hi - lo);
    }
    return res;
};

console.log(lengthOfLongestSubstring('abcabcbb'))