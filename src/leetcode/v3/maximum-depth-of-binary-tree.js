/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    /*
    3
   / \
  9  20
    /  \
   15   7
    1. 按BFS中levelOrder打印，每进一层 leveHeight++
    2. BFS用的是queue,dfs是stack
    */
    if (!root) {
        return 0;
    }
    let levelHeight = 0;
    let cur;
    // let tempSubArr = [];
    let queue = [root];
    while (queue.length) {
        //记住当层节点数量(出栈前)
        let lenLevel = queue.length;
        let i = 0;
        while (i < lenLevel) {
            cur = queue.pop();
            cur.left && queue.unshift(cur.left);
            cur.right && queue.unshift(cur.right);
            i++;
        }
        levelHeight++;
    }
    return levelHeight;
};

const constructTreeFromArray = require('../lib/constructTreeFromArray');
console.log(maxDepth(constructTreeFromArray([3, 9, 20, null, null, 15, 7]), 3));


var maxDepthWithRecursion = function (root) {
    /*
    3
   / \
  9  20
    /  \
   15   7
    1. 递归求解左右子树高度中最大的 + 1(当前的)
    当前高度= Max(leftHeight,rightHeight) + 1
    */
    if (!root) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
