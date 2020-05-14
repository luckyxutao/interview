/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const { TreeNode, root } = require('../lib/TreeNode');
const constructTreeFromArray = require('../lib/constructTreeFromArray');
//       10
//    9        20
//      35   15    24

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
 */
var preorderTraversal = function (root) {
    if(!root){
        return;
    }
    let res = [];
    let stack = [root];
    while(stack.length){
        let node = stack.pop();
        res.push(node.val);
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
    }
    return res;
};

console.log(preorderTraversal(root));