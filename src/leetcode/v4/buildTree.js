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
 var buildTree = function(preorder, inorder) {
  if(!preorder.length){
    return null;
  }
  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);
  let pos = inorder.indexOf(rootVal);
  let leftPreorder = preorder.slice(1,pos+1);
  let leftInorder = inorder.slice(0,pos);
  let rightPreOrder = preorder.slice(pos+1);
  let rightInOrder = inorder.slice(pos+1);
  root.left = buildTree(leftPreorder,leftInorder);
  root.right = buildTree(rightPreOrder,rightInOrder);
  return root;

};
const preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];
console.log(buildTree(preorder,inorder));