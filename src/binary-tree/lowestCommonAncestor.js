/**
 * 核心思路
 * 是一个BST
 * 1. dfs前序遍历
 * 2. p,q是两个节点，但没明确说p,q哪个大哪个小
 * 3. 当前节点同时大于p和q，说明需要在左子树搜索
 * 4. 当前节点同时小于p和q,说明需要在右子树搜索
 * 5. 否则说明p\q分布在当前节点的两侧
 */
const { TreeNode } = require('../lib/TreeNode');
const constructTreeFromArray = require('../lib/constructTreeFromArray')
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) {
        return null;
    }
    var nodeValue = root.val;
    if(nodeValue > p.val && nodeValue > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (nodeValue < p.val && nodeValue < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
};


// var lowestCommonAncestor = function (root, p, q) {
//     if(root == null){return root}
//     if(p.val < root.val && root.val > q.val){
//        return lowestCommonAncestor(root.left, p, q);
//     }
//     if(p.val > root.val && root.val < q.val){
//        return lowestCommonAncestor(root.right, p, q);
//     }
//     return root;
// };

// var root = constructTreeFromArray([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
var root = constructTreeFromArray([2,1]);
console.log(lowestCommonAncestor(root, new TreeNode(1), new TreeNode(2)));