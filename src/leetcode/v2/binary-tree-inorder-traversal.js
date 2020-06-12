/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const { TreeNode, root } = require('../lib/TreeNode');
const constructTreeFromArray = require('../lib/constructTreeFromArray');
//         10
//     9        20
//  5    35   15    24
/**
 * 
 * 迭代
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    //https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
    let res = [];
    if (!root) {
        return res;
    }
    let st = [];
    let cur = root;
    while(st.length || cur){
        //直到没有left
        while(cur){
            st.push(cur);
            cur = cur.left;
        }
        //到此时，cur=null, 栈顶元素已经没left了
        cur = st.pop();//
        res.push(cur.val);
        //看右边节点
        cur = cur.right;
    }
    return res;
};

console.log(inorderTraversal(constructTreeFromArray([1, 2, 3, 4, 5, 6])));

/**
 * 
 * 递归版
 */
var inorderTraversalWithRecursion = function (root) {
    let res = [];
    if (!root) {
        return res;
    }
    dfsHelper(root, res);
    return res;
};

function dfsHelper(node, res) {
    if (!node) {
        return
    }
    node.left && dfsHelper(node.left, res);//左
    res.push(node.val);//中
    node.right && dfsHelper(node.right, res);//右
}