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
    let queue = [root];
    let cur;
    while(queue.length){
        cur = queue.pop();
        console.log(cur.val);
        //根据BST的性质，小 中 大 分布，一旦遇到不是在一边情况，则直接返回
        if(p.val > cur.val && q.val > cur.val){
            cur.right && queue.unshift(cur.right);
        } else if( p.val < cur.val && q.val < cur.val ){
            cur.left && queue.unshift(cur.left);
        } else {
            return cur;
        }
    }
    return root;
};
const { TreeNode } = require('../lib/TreeNode')
const constructTreeFromArray = require('../lib/constructTreeFromArray');
// let root2 = constructTreeFromArray([1, 2, 3, 4, 5]);
let root2 = constructTreeFromArray([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
console.log(lowestCommonAncestor(root2, new TreeNode(2), new TreeNode(8)));


var lowestCommonAncestorWithRecursion = function (root, p, q) {
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