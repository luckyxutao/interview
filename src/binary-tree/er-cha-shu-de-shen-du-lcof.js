
const { TreeNode, root } = require('../lib/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 递归版本
var maxDepth = function(root) {
    if(!root){
        return 0;
    }
    return Math.max(1+maxDepth(root.left),1+maxDepth(root.right))
};

//层次遍历，每层+1
var maxDepth = function(root) {
    var level = 0;
    if(!root){
        return level;
    }
    var queue = [root];
    while(queue.length){
        var queueLen = queue.length;
        for(let i=0;i<queueLen;i++){
            var cur = queue.pop();
            cur.left && queue.unshift(cur.left);
            cur.right && queue.unshift(cur.right);
        }
        level++;

    }
    return level;
};

console.log(maxDepth(root))