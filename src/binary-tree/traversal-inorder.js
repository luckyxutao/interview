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
function inOrderTraversalWithRecursion(root) {
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
    node.left && helper(node.left, res);
    res.push(node.val);
    node.right && helper(node.right, res);
}
//       10
//    9        20
//      35   15    24
// 中->右->左 反转得到后序遍历
function inOrderTraversal(root) {
    if (!root) {
        return [];
    }
    var res = [];
    var s1 = [];
    var cur = root;
    while (cur || s1.length) {
        while (cur) {
            s1.push(cur);
            cur = cur.left;
        }
        cur = s1.pop();
        res.push(cur.val);
        cur = cur.right;
    }
    return res;
}





console.log(inOrderTraversalWithRecursion(root));
console.log(inOrderTraversal(root));
