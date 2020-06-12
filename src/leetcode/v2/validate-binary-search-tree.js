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
var isValidBST = function (root) {
    if (!root) {
        return true;
    }
    let pre = null;
    function dfsHelper(root) {
        if (!root) {
            return true;
        }
        //中序遍历
        let leftIsOk = dfsHelper(root.left);
        if(!leftIsOk){
            return false;
        }
        if (pre) {
            if (root.val <= pre.val) {
                return false;
            }
        }
        pre = root;
        return dfsHelper(root.right);
    }
    return dfsHelper(root);
};
const constructTreeFromArray = require('../lib/constructTreeFromArray');

console.log(isValidBST(constructTreeFromArray([2,1,3])));