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
    if(!preorder.length || !inorder.length ){
        return null;
    }
    let preorderFirst = preorder[0];
    let root = new TreeNode(preorderFirst);
    let inInOrderPos = inorder.indexOf(preorderFirst);
    let nextLeftPreorder = preorder.slice(1, inInOrderPos + 1)
    let nextRightPreorder = preorder.slice(inInOrderPos + 1)
    let nextLeftInorder = inorder.slice(0, inInOrderPos);
    let nextRightInorder = inorder.slice(inInOrderPos + 1);
    root.left = buildTree(nextLeftPreorder, nextLeftInorder);
    root.right = buildTree(nextRightPreorder, nextRightInorder);
    return root;
};

let treeRoot = buildTree([3, 9, 20, 15, 7]
                        ,[9, 3, 15, 20, 7])
console.log(treeRoot);
