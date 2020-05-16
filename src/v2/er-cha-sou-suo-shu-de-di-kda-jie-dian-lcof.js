/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    if (!root) {
        return null;
    }
    //中序遍历 左中右
    let cur = root;
    let queue = [];
    let res = [];
    while (cur || queue.length) {
        while(cur){
            queue.push(cur);
            cur = cur.left;
        }
        cur = queue.pop();
        res.push(cur.val);
        cur = cur.right;
        //cur为null
        // queue里都是左
    }
    return res[res.length-k]
    
};

const { TreeNode } = require('../lib/TreeNode')
const constructTreeFromArray = require('../lib/constructTreeFromArray');
// let root2 = constructTreeFromArray([1, 2, 3, 4, 5]);
let root2 = constructTreeFromArray([5, 3, 6, 2, 4, null, null, 1]);
console.log(kthLargest(root2));
