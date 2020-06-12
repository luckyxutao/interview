
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
 * 借助stack，不断往栈顶推入子元素
 */
var preorderTraversal = function(root) {
    let res = [];
    if(!root){
        return res;
    }
    let stack = [root];
    let cur;
    while(stack.length){
        cur = stack.pop();
        res.push(cur.val);
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);
    }
    return res;
};


const constructTreeFromArray = require('../lib/constructTreeFromArray');
console.log(preorderTraversal(constructTreeFromArray([1,4,3,2])));