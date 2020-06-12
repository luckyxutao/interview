    //         10
    //     9        20
    //  5    35   15    24
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 1. 左->右->后
 * 2. 前序遍历-先右
 *  10 20 24 15 9 35 5 //
 * 5 35 9 15 24 20 10 //后序遍历
 */
var postorderTraversal = function(root) {
    let res = [];
    if(!root){
        return res;
    }
    /*
        1. 目标: 左-右-中
        2. reverse(前序遍历(先右)) = 左-右-中
    */
   let cur;
   // dfs都是栈，bfs是队列
   let stack = [root];
    while(stack.length){
        cur = stack.pop();
        //倒序
        res.unshift(cur.val);
        //先放左后放右，出栈是先右，跟前序相返
        cur.left && stack.push(cur.left);
        cur.right && stack.push(cur.right);
    }
    return res;
};

const constructTreeFromArray = require('../lib/constructTreeFromArray');
console.log(postorderTraversal(constructTreeFromArray([1,4,3,2])));