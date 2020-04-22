/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var i = 0, j = 0;
    var set = new Set();
    var maxLen = 0;
    while (i < s.length && j < s.length) {
        if(!set.has(s.charAt(j))){
            set.add(s.charAt(j++));
            maxLen = Math.max(set.size,maxLen);
        } else {
            set.delete(s.charAt(i++));
        }
    }
};
// var lengthOfLongestSubstring = function (s) {
//     var i = 0, j = 0;
//     var set = new Set();
//     var maxLen = 0;
//     while (i < s.length && j < s.length) {
//         if(!set.has(s.charAt(j))){
//             set.add(s.charAt(j++));
//             maxLen = Math.max(set.size,maxLen);
//         } else {
//             set.clear();
//             i++;
//             j=i;
//         }
//     }
//     return maxLen
// };
console.log(lengthOfLongestSubstring("abba"))
// console.log(lengthOfLongestSubstring('abcabcbb'))