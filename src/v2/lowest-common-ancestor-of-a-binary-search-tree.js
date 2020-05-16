/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) {
        return null;
    }
    //如果都大于root.val，说明元素位于树的右边
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right,p,q);
    }
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left,p,q);
    }
    return root;
};
const { TreeNode } = require('../lib/TreeNode')
const constructTreeFromArray = require('../lib/constructTreeFromArray');
// let root2 = constructTreeFromArray([1, 2, 3, 4, 5]);
let root2 = constructTreeFromArray([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
console.log(lowestCommonAncestor(root2, new TreeNode(2), new TreeNode(4)));
