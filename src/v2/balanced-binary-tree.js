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
const constructTreeFromArray = require('../lib/constructTreeFromArray');
// let root2 = constructTreeFromArray([1, 2, 3, 4, 5]);
let root2 = constructTreeFromArray([1,2,2,3,3,null,null,4,4]);
console.log(isBalanced(root2, 22))