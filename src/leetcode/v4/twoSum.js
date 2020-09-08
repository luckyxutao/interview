/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    if(!nums||!nums.length){
        return fasle;
    }
    nums.sort((a,b)=>a-b);
    let numOfKing = 0;
    let i = 0;
    while(nums[i]===0&&i<nums.length){
        numOfKing++;
        i++;
    }
    while(i<nums.length-1){
        let next = nums[i+1];
        let dela = next-nums[i]-1;
        if(dela >0){
            numOfKing-=dela;
        }
        if(numOfKing<0){
            return false
        }
        i++;
    }

    return true;
};
isStraight([0,0,1,2,5])
// /**
//  * @param {character[][]} board
//  * @param {string} word
//  * @return {boolean}
//  */
// var exist = function(board, word) {
//     if(!board||!board.length){
//         return false;
//     }
//     for(let i = 0;i<board.length;i++){
//         for(let j = 0;j<board[i].length;j++){
//             if(searchHelper(board,word,0,i,j,new Map)){
//                 return true;
//             }
//         }
//     }
//     return false;
// };

// function searchHelper(board,word,pos,i,j,visited){
//     if(pos === word.length){
//         return true;
//     }
//     //检查越界情况
//     if(i<0||i>=board.length || j<0 || j>=board[0].length){
//         return false;
//     }
//     let key = i+'-'+j;
//     if(visited.has(key)){
//         return false;
//     }
//     if(word.charAt(pos) !== board[i][j]){
//         return false;
//     }
//     visited.set(key,true);
//     let res = 
//     //向右
//     searchHelper(board,word,pos+1,i,j+1,visited)||
//     //向下
//     searchHelper(board,word,pos+1,i+1,j,visited)||

//     //向左
//     searchHelper(board,word,pos+1,i,j-1,visited)||
//     //向上
//     searchHelper(board,word,pos+1,i-1,j,visited);
//     return res;

// }

// console.log(exist([["a","b"],["c","d"]],'acdb'));
// /**
//  * @param {string} s
//  * @return {string[]}
//  */
// var permutation = function(s) {
//     if(!s){
//         return [];
//     }
//     let res = new Set();
//     let visited = [];
//     permutationHelper(s,[],visited,res);
//     return Array.from(res);
// };

// function permutationHelper(s,path,visited,res){
//     if(path.length === s.length){
//         res.add(path.join(''))
//         return;
//     }
//     for(let i = 0;i<s.length;i++){
//         if(visited[i]){
//             continue;
//         }
//         visited[i] = true;
//         path.push(s.charAt(i));
//         permutationHelper(s,path,visited,res);
//         path.pop();
//         visited[i] = false;
//     }

// }

// console.log(permutation('abc'))
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var singleNumbers = function(nums) {
//     let xOrSum = 0;
//     for(let i = 0;i<nums.length;i++){
//         xOrSum = xOrSum ^ nums[i];
//     }
//     // 2^ 10 = 
//     //  10100
//         // 00000
//     /*
//         a ^ a = 0
//         a ^ 0 = a
//         0001 = 1
//         0110 = 6
//         0111 = 7 xOrSum
//         0001

//     */
//     let mask = 1;//00001
//     while((mask & xOrSum)==0){
//         mask<<=1;
//     }
//     let a = 1, b = 1;
//     for(let i = 0;i<nums.length;i++){
//         if((nums[i] & mask)!== 0){
//             a = a ^ nums[i]
//         } else {
//             b = b ^ nums[i]
//         }
//     }
//     return [a,b];

// };
// singleNumbers([4,1,4,6])