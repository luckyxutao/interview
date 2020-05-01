/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let count = 0;
    for(let i = 1;i<=n;i++) {
        var cur = i.toString();
        var replaced = cur.replace(/1/g,'');
        var len = cur.length - replaced.length;
        count+=len;
    }
    return count
};

countDigitOne(13);


// /**
//  * @param {number} n
//  * @return {number}
//  */
// var countDigitOne = function(n) {
//     let count = 0;
//     for(let i = 1;i<=n;i++) {
//         var cur = i.toString();
//         var replaced = cur.replace(/1/g,'');
//         var len = cur.length - replaced.length;
//         count+=len;
//     }
//     return count
// };