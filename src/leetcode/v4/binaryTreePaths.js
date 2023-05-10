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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
   let res = [];
  if(!root){
    return res;
  }
  dfsHelper(root,[],res);
  return res;
};
function dfsHelper(root,path,res){
  if(!root){
    return;
  }
  if(!root.left && !root.right){
    res.push([...path,root.val].join('->'));
    return;
  }
  path.push(root.val);
  dfsHelper(root.left,path,res);
  dfsHelper(root.right,path,res);
  path.pop();
}

const constructTreeFromArray = require('../lib/constructTreeFromArray');
let root2 = constructTreeFromArray([1, 2, 3, 4, 5]);
console.log(binaryTreePaths(root2))
/*
         1
    2        3

4     5

*/