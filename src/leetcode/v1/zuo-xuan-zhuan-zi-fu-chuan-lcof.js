/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// var reverseLeftWords = function (s, n) {
//     var i = 0;
//     var arr = [...s];
//     while(i<n){
//         arr.push(arr.shift());
//         i++;
//     }
//     return arr.join('')
// };

// /**
//  * @param {string} s
//  * @param {number} n
//  * @return {string}
//  */
var reverseLeftWords = function(s, n) {
    return s.slice(n) + s.slice(0,n);
};

console.log(reverseLeftWords('abcdefg', 2));