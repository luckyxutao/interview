/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    var res = [];
    dfsHelper(board,res);
};

function dfsHelper(board, res) {
    for (let i = 0; i < board.length; i++) {
        var row = board[i];
        for (let j = 0; j < row.length; j++) {
            console.log(i,j)
        }
    }

}

var board =
    [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ];
const re = exist(board, 'ABCCED');
console.log(re);