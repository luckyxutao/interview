const { TreeNode, root } = require('../lib/TreeNode');

// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/submissions/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function preOrderTraversalWithRecursion(root) {
    var res = [];
    if (!root) {
        return res;
    }
    helper(root, res);
    return res;
}
function helper(node, res) {
    if (!node) {
        return null;
    }
    res.push(node.val);
    node.left && helper(node.left, res);
    node.right && helper(node.right, res);
}
// //       10
// //    9        20
// //      35   15    24
function preOrderTraversal(root) {
    if (!root) {
        return [];
    }
    var res = [];
    var s1 = [root];
    while (s1.length) {
        var cur = s1.pop();
        res.push(cur.val);
        cur.right && s1.push(cur.right);
        cur.left && s1.push(cur.left);
    }
    return res;
}





console.log(preOrderTraversalWithRecursion(root));
console.log(preOrderTraversal(root));
