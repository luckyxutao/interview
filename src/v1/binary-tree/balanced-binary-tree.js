//给定一个二叉树，判断它是否是高度平衡的二叉树。
/**
 * 1. 得到左、右的最大高度（递归1）
 * 2. 如果高度差超过1则false
 * 3. 如果没超过1继续递归（递归2
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const { TreeNode } = require('../lib/TreeNode');
const constructTreeFromArray = require('../lib/constructTreeFromArray');


function height(root) {
    if (!root) {
        return 0;
    }
    var left = 1 + height(root.left);
    var right = 1 + height(root.right);
    return Math.max(left,right);
}
var isBalanced = function (root) {
    if (!root) {
        return true;
    }
    var leftDepth = height(root.left);
    var rightDepth = height(root.right);
    var dff = Math.abs(leftDepth-rightDepth);
    if(dff>1){
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right)
};
var root = constructTreeFromArray([1,2,2,3,null,null,3,4,null,null,4]);
console.log(isBalanced(root));
