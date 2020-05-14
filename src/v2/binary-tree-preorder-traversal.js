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
    let res = [];
    dfsHelper(root, res);
    return res;
};

function dfsHelper(node, res) {
    if (!node) {
        return;
    }
    res.push(node.val);
    dfsHelper(node.left, res);
    dfsHelper(node.right, res);
}

console.log(preorderTraversal(root));