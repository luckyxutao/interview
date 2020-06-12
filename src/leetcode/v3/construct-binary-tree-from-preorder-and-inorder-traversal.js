/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const { TreeNode } = require('../lib/TreeNode')
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) {
        return;
    }
    /*
        根据前序构建
        root.left = buildtree
        root.right = buildtree;
        return 
    */
    let curVal = preorder[0];
    let root = new TreeNode(curVal);
    let pos = inorder.indexOf(curVal);
    let leftTreePreOrder = preorder.slice(1, pos + 1);
    let leftTreeInOrder = inorder.slice(0, pos);
    let rightTreePreOrder = preorder.slice(pos + 1);
    let rightTreeInOrder = inorder.slice(pos + 1);
    root.left = buildTree(leftTreePreOrder, leftTreeInOrder);
    root.right = buildTree(rightTreePreOrder, rightTreeInOrder);
    return root;
};

let treeRoot = buildTree([3, 9, 20, 15, 7]
    , [9, 3, 15, 20, 7])
console.log(treeRoot);