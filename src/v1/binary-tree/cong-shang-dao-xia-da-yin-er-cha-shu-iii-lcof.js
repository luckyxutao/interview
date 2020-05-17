
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
    var level = 0;
    while (queue.length) {
        var qLen = queue.length;
        var subArr = [];
        for (let i = 0; i < qLen; i++) {
            var cur = queue.pop();
            if(level%2===0){
                subArr.push(cur.val);
            } else {
                subArr.unshift(cur.val);
            }
            cur.left && queue.unshift(cur.left);
            cur.right && queue.unshift(cur.right)
        }
        level++;
        res.push(subArr);
    }

    return res;

};

console.log(levelOrder(root));
