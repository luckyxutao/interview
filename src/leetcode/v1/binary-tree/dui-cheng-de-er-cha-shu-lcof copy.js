/**
 * 左子树的左节点和右子树的右节点对比
 * 左子树的右节点和右子树的左节点对比
 * 递归法
 * 利用栈
 */


const { TreeNode, root } = require('../../lib/TreeNode');
const constructTreeFromArray = require('../../lib/constructTreeFromArray');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(!root){
        return [];
    }
    let res = [];
    dfsHelper(root,[],sum,res);
    return res;
};
function dfsHelper(root,path,needVal,res){
    if(!root){
        if(needVal === 0){
            res.push([...path]);
        }
        return;
    }
    path.push(root.val);
    dfsHelper(root.left,path,needVal-root.val,res);
    dfsHelper(root.right,path,needVal-root.val,res);
    path.pop();
}
var root2 = constructTreeFromArray([5,4,8,11,null,13,4,7,2,null,null,5,1]);
console.log(pathSum(root2, 22));
