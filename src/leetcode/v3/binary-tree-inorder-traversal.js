/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 左-中-右
 */
var inorderTraversal = function(root) {
    //         10
    //     9        20
    //  5    35   15    24
    let res = [];
    if(!root){
        return res;
    }
    let stack = [];
    let cur = root;
    while(stack.length || cur){
        //一直将left推入stack,DFS
        while(cur){
            stack.push(cur);
            cur = cur.left;
        }
        //cur为null,将叶子节点推出
        cur = stack.pop();
        res.push(cur.val);
        cur = cur.right;
    }
    return res;
};
//res [5,9,35,]

const constructTreeFromArray = require('../lib/constructTreeFromArray');
console.log(inorderTraversal(constructTreeFromArray([1,4,3,2])));