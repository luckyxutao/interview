/* 通过一个子循环来获取每层元素
 * 
 * 
 * 
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    var res = [];
    if (!root) {
        return res;
    }
    var queue = [root];
    while (queue.length) {
        var queueLen = queue.length;
        var subArr = [];// 通过一个循环，把每层的节点放到一个临时数组
        for (let i = 0; i < queueLen; i++) {
            var cur = queue.pop();
            subArr.push(cur.val);
            cur.left && queue.unshift(cur.left);
            cur.right && queue.unshift(cur.right);
        }
        res.push(subArr);
    }
    return res;
};