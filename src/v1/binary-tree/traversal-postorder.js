const { TreeNode, root } = require('../lib/TreeNode');
//       10
//    9        20
//      35   15    24
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
function postOrderTraversalWithRecursion(root) {
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
    node.right && helper(node.right, res);
    res.push(node.val);
}

// 中->右->左 反转得到后序遍历
function postOrderTraversal(root) {
    var res = [];
    if(!root){
        return res;
    }
    var s1 = [root];
    while(s1.length){
        var cur = s1.pop();
        res.unshift(cur.val);
        cur.left && s1.push(cur.left);
        cur.right && s1.push(cur.right);
    }
    return res;
}





console.log(postOrderTraversalWithRecursion(root));
console.log(postOrderTraversal(root));
