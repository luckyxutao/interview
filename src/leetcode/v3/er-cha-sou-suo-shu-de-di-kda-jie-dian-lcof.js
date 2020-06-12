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
var kthLargest = function(root, k) {
    /**
     * BST的中序遍历是升序排列
     * 按中序遍历，返回res[res.length-k]
     */
    if(!root){
        return null;
    }
    let stack = [];
    let cur = root;
    let res = [];
    while(stack.length||cur){
        while(cur){
            //一直将左孩子对栈
            stack.push(cur);
            cur = cur.left;
        }
        //cur为null,从stack取出最后一个左孩子
        cur = stack.pop();
        res.push(cur.val);
        //没有左孩子了，看右孩子
        cur = cur.right;
    }
    return res[res.length-k]
};
const constructTreeFromArray = require('../lib/constructTreeFromArray');
console.log(kthLargest(constructTreeFromArray([5,3,6,2,4,null,null,1]),3));
