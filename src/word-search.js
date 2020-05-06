/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    // let res = [];
    for (let i = 0; i < board.length; i++) {
        let row = board[i];
        for (let j = 0; j < row.length; j++) {
            if (dfsHelper(board, word, i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

function dfsHelper(board, word, i, j, len) {
    if (len === word.length) {
        return true;
    }

    //判断是否越界
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
        return false;
    }
    if (word.charAt(len) !== board[i][j]) {
        return false;
    }
    let temp = board[i][j];
    board[i][j] = '0'
    let flag = dfsHelper(board, word, i, j + 1, len + 1) //向右搜索
        || dfsHelper(board, word, i + 1, j, len + 1) //向下搜索
        || dfsHelper(board, word, i, j - 1, len + 1) //向左搜索
        || dfsHelper(board, word, i - 1, j, len + 1) //向上搜索
    board[i][j] = temp;
    return flag;
}

// var board =
//     /**
//      * 00,01,02
//      *       12 13
//      *       
//      */
//     [
//         ['A', 'B', 'C', 'E'],
//         ['S', 'F', 'C', 'S'],
//         ['A', 'D', 'E', 'E']
//     ];

var board =
    /**
     * 00,01,02
     *       12 13
     *       
     */
    [
        ['a'],
    ];
const re = exist(board, 'ab');
console.log(re);