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
var levelOrder = function (root) {
    if(!root){
        return [];
    }
    var queue = [root];
    var res = [];
    while(queue.length){
        var cur = queue.pop();
        res.push(cur.val);
        cur.left && queue.unshift(cur.left);//利用了队列的先进先出原则，如果是push则是dfs
        cur.right && queue.unshift(cur.right);
    }
    return res;
};

console.log(levelOrder(root));
