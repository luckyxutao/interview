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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    let res = [];
    if(!root){
        return res;
    }
    dfsHelper(root,target,[],res);
    return res;
};
function dfsHelper(root,target,path,res){
    if(!root){
        return;
    }
    if(!root.left && !root.right){
        if(target === root.val){
            res.push([...path,root.val])
            return
        }
        return 
    }
    path.push(root.val);
    dfsHelper(root.left,target-root.val,path,res)
    dfsHelper(root.right,target-root.val,path,res)
    path.pop();

}
const constructTreeFromArray = require('../lib/constructTreeFromArray');
let root2 = constructTreeFromArray([5,4,8,11,null,13,4,7,2,null,null,5,1]);
console.log(pathSum(root2,22))