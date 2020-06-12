/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(!board||!board.length){
        return false;
    }
    let res = false;
    let rowLen = board.length, columnLen = board[0].length;
    //从[0][0]开始找，找不到再从[0][1]开始
    for(let i = 0;i<rowLen;i++){
        for(let j = 0;j<columnLen;j++){
            //从第一个字符开始
            if(findWord(board,word,i,j,0)){
                return true;
            }
        }
    }
    return res;
};
//搜索起始点(i,j), 访问过的格子设置为0
function findWord(board,word,i,j, charIndex){
    //中止条件
    if(i<0||j<0 || i>=board.length || j>=board[0].length){
        return false;
    }

    let curChar = word.charAt(charIndex);
    //如果字符不同则返回
    if(curChar !== board[i][j]){
        return false;
    }
    //如果找到单词，结束, i和j可能达到边界，因此单词判断要放前
    if(charIndex === word.length - 1){
        return true;
    }
    //如果当前字符相同，则继续向下搜索
    let oldChar = board[i][j];
    board[i][j] = '0';
    //向右
    let res = findWord(board,word,i,j+1,charIndex+1)
                ||findWord(board,word,i+1,j,charIndex+1)//向下
                ||findWord(board,word,i,j-1,charIndex+1)//向左
                ||findWord(board,word,i-1,j,charIndex+1);//向上
    board[i][j] = oldChar;
    //如果4个方向都找不到下一个字符，则返回false
    return res;
    //向下搜索
}


exist([["a"]],"a")
