/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
  if(!root){
    return true;
  }
  let leftDepth = getDepth(root.left);
  let rightDepth = getDepth(root.right);
  if(Math.abs(leftDepth-rightDepth)>1){
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
};
function getDepth(root){
  if(!root){
    return 0;
  }
  return 1 + Math.max(getDepth(root.left),getDepth(root.right))
}
const { TreeNode, root } = require('../lib/TreeNode');
const constructTreeFromArray = require('../lib/constructTreeFromArray');

var root2 = constructTreeFromArray([]);
console.log(isBalanced(root2));
