/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    let rows = matrix.length, columns = matrix[0].length;
    let row = 0, column = columns - 1;
    while (row < rows && column > 0) {
        let num = matrix[row][column];
        if(num == target){
            return true;
        } else if(num > target){
            column--;
        } else if(num < target){
            row++;
        }
    }
    return false;
};


let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];

console.log(findNumberIn2DArray(matrix, 20));