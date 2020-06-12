/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let res = [];
    let path = [];
    dfsHelper(root, path, res, p);
    dfsHelper(root, path, res, q);
    let leftNode = res[0], rightNode = res[1];
    let i = 0;
    //返回的是node不是number
    while (i < leftNode.length && i < rightNode.length && leftNode[i].val === rightNode[i].val) {
        i++;
    }
    return leftNode[i - 1];
};
/*
    1. 找到从根节点到target路径
*/
function dfsHelper(root, path, res, target) {
    if (!root) {
        return
    }
    //不一定是叶子节点，
    if (root.val === target.val) {
        res.push([...path, root]);
        return;
    }

    path.push(root);
    dfsHelper(root.left, path, res, target);
    dfsHelper(root.right, path, res, target);
    path.pop();
}

const { TreeNode } = require('../lib/TreeNode')
const constructTreeFromArray = require('../lib/constructTreeFromArray');
let root2 = constructTreeFromArray([3,5,1,6,2,0,8,null,null,7,4]);
console.log(lowestCommonAncestor(root2, new TreeNode(5), new TreeNode(1)));

