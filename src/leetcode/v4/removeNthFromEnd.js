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
 * @return {number}
 */
 var sumNumbers = function(root,prevSum=0) {
  if(root){
    return 0;
  }
  if(!root.left && !root.right){
    return root.val
  }
  return dfsHelper(root.left,prevSum*10 + root.val) + dfsHelper(root.right,prevSum*10 + root.val)
};