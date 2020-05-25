/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    /*
    1. dfs回溯法
      让矩阵的每个位置都匹配下word,一旦成功就返回
    2. 遍历矩阵[0,0]开始，每遍历一次去匹配下word，如果匹配成功则返回，否则遍历矩阵直到结束
    */
    if(!board || !board.length){
        return false;
    }

    let c2 = board[0].length;
    let r2 = board.length;
    //遍历矩阵，让str从矩阵的00开始找，一旦找到则返回，
    // 不一定字符就和[0,0]相同
    // bfce
    for(let i = 0; i< r2;i++){
        for(let j = 0;j<c2;j++){
            //让矩阵的每个位置都匹配下word(从第一个字符开始)
            if(dfsHelper(board,word,i,j,0)){
                return true;
            }
        }
    }
    return false;
};
//k是代表word的索引
function dfsHelper(board,word,i,j,k){
    //检查4个边界
    if(i>= board.length || j >= board[0].length || j<0 || i < 0){
        return false;
    }
    //中止条件
    if(k== word.length){
        return true;
    }
    //如果char和当前矩阵不同，则返回false
    //递归是为ture还要继续，false才返回
    if(word.charAt(k) !== board[i][j]){
        return false;
    }
    let old = board[i][j];
    board[i][j] = '0';
    //查询子树,找下一个字符k+1
    let re = dfsHelper(board,word,i,j+1,k+1)||
             dfsHelper(board,word,i+1,j,k+1)||
             dfsHelper(board,word,i,j-1,k+1)||
             dfsHelper(board,word,i-1,j,k+1);

    board[i][j] = old;
    return re;//结果是子树的结果(k=word.length)
}


















let board = [['a']], word = "a";

let re = exist(board, word);
console.log(re);


















