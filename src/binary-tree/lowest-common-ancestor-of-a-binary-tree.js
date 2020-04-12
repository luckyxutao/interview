// 所有节点不重复
// 一旦左子树和右子树都找到节点了（p或q)
// left为null或right为null说明节点在一边
// 如果只在一边找到（left或right),则该节点就是最近祖先（无论后续结点在左还是在右）
//
//
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { TreeNode } = require('../lib/TreeNode');
const constructTreeFromArray = require('../lib/constructTreeFromArray')
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
    if (root.val === p.val || root.val === q.val) {
        return root;
    }
    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);
    if (left && right) {
        return root;
    } else if (left) {
        return left;
    } else if (right) {
        return right;
    } else {
        return null;
    }
};
var root = constructTreeFromArray([3,5,1,6,2,0,8,null,null,7,4]);
console.log(lowestCommonAncestor(root, new TreeNode(2), new TreeNode(4)));