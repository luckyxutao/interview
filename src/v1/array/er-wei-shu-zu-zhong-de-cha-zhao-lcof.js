/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        var rowArr = matrix[i];
        for (let j = 0; j < rowArr.length; j++)
            if (rowArr[j] === target) {
                return true;
            }
    }
    return false;
}


var ff = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];

var gg = findNumberIn2DArray(ff, 20);
console.log(gg);
