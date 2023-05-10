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
 * @return {number[][]}
 */
 function MyNode(node,depth,pos){
    this.node = node
    this.depth = depth;
    this.pos = pos;
  }
   var widthOfBinaryTree = function(root) {
    let res = 0
    if(!root){
      return res;
    }
    let queue = [[root,0]];
    while(queue.length){
      let levelSize = queue.length;
      let firstNum = queue[levelSize-1][1];
      //取下当前层宽度
      res = Math.max(res,queue[0][1] - firstNum+1);
      let i = 0;
      while(i<levelSize){
        const [node,num] = queue.pop();
        const realStart = num - firstNum;
        node.left && queue.unshift([node.left,2*realStart+1])
        node.right && queue.unshift([node.right,2*realStart+2])
        i++;
      }
    }
    return res;
  };
  const { TreeNode, root } = require('../lib/TreeNode');
  const constructTreeFromArray = require('../lib/constructTreeFromArray');
  
  var root2 = constructTreeFromArray([1,3,2,5,3,null,9]);
  
  console.log(widthOfBinaryTree(root2))