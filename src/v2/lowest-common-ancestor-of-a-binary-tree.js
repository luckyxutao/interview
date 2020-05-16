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
    if (!root) {
        return null;
    }
    // let pathP = [];
    let res = [];
    let path = [];
    dfsHelper(root, path, p, q, res);
    console.log(res);
    
    let cur;
    pathP = res[0];
    pathQ = res[1]
    while (pathP[0] == pathQ[0]) {
        pathP.shift()
        cur = pathQ.shift()
    }
    return cur;
};

function dfsHelper(root, path, p,q, res) {
    if (!root) {
        return null;
    }
    //不一定时叶子节点，当前节点root还没加入到path
    if (root.val === p.val || root.val === q.val) {
        res.push([...path,root.val])
    }
    path.push(root.val);
    dfsHelper(root.left, path, p,q, res);
    dfsHelper(root.right, path, p,q, res);
    path.pop();
}

const { TreeNode } = require('../lib/TreeNode')
const constructTreeFromArray = require('../lib/constructTreeFromArray');
let root2 = constructTreeFromArray([3,5,1,6,2,0,8,null,null,7,4]);
console.log(lowestCommonAncestor(root2, new TreeNode(5), new TreeNode(1)));

