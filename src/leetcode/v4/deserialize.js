/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 const { TreeNode } = require('../lib/TreeNode')
 /**
  * Encodes a tree to a single string.
  *
  * @param {TreeNode} root
  * @return {string}
  */
 var serialize = function (root) {
   if(!root){
     return [];
   }
   let queue = [root];
   let res = [];
   while(queue.length){
      let cur = queue.pop();
      if(cur === null){
        res.push(null);
        continue;
      } else {
        res.push(cur.val);
      }
      queue.unshift(cur.left);
      queue.unshift(cur.right);
   }
   return res;
 };
 
 /**
  * Decodes your encoded data to tree.
  *
  * @param {string} data
  * @return {TreeNode}
  */
 var deserialize = function (data) {
    if(!data||!data.length){
      return null;
    }
    let root = new TreeNode(data[0]);
    let i = 1;
    let queue = [root];
    while(i<data.length){
      let cur = queue.pop();
      if(data[i]!==null){
        cur.left = new TreeNode(data[i]);
        queue.unshift(cur.left);
      }
      i++;
      if(data[i]!==null){
        cur.right = new TreeNode(data[i]);
        queue.unshift(cur.right);
      }
      i++;
    }
    return root;
 };
 

 
 /**
  * Your functions will be called as such:
  * deserialize(serialize(root));
  */
 let arr = [1,2,3,null,null,4,5];
 let tree = deserialize(arr);
 console.log(tree);