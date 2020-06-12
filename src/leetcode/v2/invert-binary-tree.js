/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if(!root){
        return null;
    }
    let queue = [root];
    let temp;
    let cur;
    while(queue.length){
        cur = queue.pop();
        temp = cur.left;
        cur.left = cur.right;
        cur.right = temp;
        cur.left && queue.unshift(cur.left);
        cur.right && queue.unshift(cur.right);
    }
    return root;
};

const constructTreeFromArray = require('../lib/constructTreeFromArray');
let root2 = constructTreeFromArray([1,2,3,4,5,6]);
console.log(mirrorTree(root2))