
const { TreeNode, root } = require('../lib/TreeNode');
//       10
//    9        20
//      35   15    24
// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/submissions/
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
var buildTree = function (preorder, inorder) {
    if(!preorder.length||!inorder.length){
        return null;
    }
    var rootVal = preorder[0];
    var root = new TreeNode(rootVal);
    var pos = inorder.indexOf(rootVal);
    root.left = buildTree(preorder.slice(1,pos+1),inorder.slice(0,pos));
    root.right = buildTree(preorder.slice(pos+1),inorder.slice(pos+1));
    return root;
};

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
console.log(buildTree([3,9,20,15,7],[9,3,15,20,7]))