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
var isBalanced = function (root) {
    if (!root) {
        return true;
    }
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    if (leftHeight == -1 || rightHeight == -1) {
        return false;
    }
    return Math.abs(leftHeight - rightHeight) <= 1;
};

function height(node) {
    if (!node) {
        return 0;
    }
    let leftHeight = height(node.left);
    let rightHeight = height(node.right);
    if (leftHeight == -1) {
        return -1;
    }
    if (rightHeight == - 1) {
        return -1;
    }
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
}
const constructTreeFromArray = require('../lib/constructTreeFromArray');
// let root2 = constructTreeFromArray([1, 2, 3, 4, 5]);
let root2 = constructTreeFromArray([3,9,20,null,null,15,7]);
console.log(isBalanced(root2, 22))

/**
 * 递归版 
 * @param {根节点} root 
 */
var isBalanced2 = function (root) {
    if (!root) {
        return true;
    }
    let leftHeight = getHeightNode(root.left);
    let rightHeight = getHeightNode(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
};

function getHeightNode(node) {
    if (!node) {
        return 0;
    }
    return Math.max(getHeightNode(node.left) + 1, getHeightNode(node.right) + 1);
}