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
    let res = [];
    if (!root) {
        return res;
    }
    /*
        1. 利用队列先进先出
    */
   let queue = [root];
   let cur;
   while (queue.length) {
        cur = queue.pop();
        res.push(cur.val);
        //队列，FIFO，先进left,后进right
        cur.left && queue.unshift(cur.left);
        cur.right && queue.unshift(cur.right);
   }
   return res;
};

const constructTreeFromArray = require('../lib/constructTreeFromArray');
console.log(levelOrder(constructTreeFromArray([1, 2, 3, 4, 5, 6, 7])));