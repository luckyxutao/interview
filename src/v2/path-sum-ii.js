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
var pathSum = function (root, sum) {
    if (!root) {
        return []
    }
    let res = [];
    let path = [];
    dfsHelper(root, path, sum, res);
    return res;
};

function dfsHelper(node, path, expectedSum, res) {
    if (!node) {
        return;
    }
    //如果当前是叶子节点，判断当前值和expectedSum的关系，如果能满足则
    if (node.left == null && node.right == null && expectedSum === node.val) {
        res.push([...path,node.val]);//此时还没放入path
        return;
    }
    //path里放入当前节点
    path.push(node.val);
    //下层需要
    dfsHelper(node.left, path, expectedSum - node.val, res);
    dfsHelper(node.right, path, expectedSum - node.val, res);
    path.pop();
}
const constructTreeFromArray = require('../lib/constructTreeFromArray');
// let root2 = constructTreeFromArray([1, 2, 3, 4, 5]);
let root2 = constructTreeFromArray([5,4,8,11,null,13,4,7,2,null,null,5,1]);
console.log(pathSum(root2, 22))

