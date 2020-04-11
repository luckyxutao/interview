/**
 * 核心思路
 * 1. 前序遍历，通过一个path[]来记录走过的路径
 * 2. 每递归一层（节点），path会push一个节点（只要节点不为null,并累加)
 * 3. 每跳出一层，path.pop 去掉
 * 4. 
 */

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
const { TreeNode } = require('../lib/TreeNode');
const constructTreeFromArray = require('../lib/constructTreeFromArray');
var pathSum = function (root, expectedSum) {
    var currentSum = 0;
    var path = [];
    var res = [];
    dfsHelper(root, expectedSum, path, currentSum, res);
    return res;
};

function dfsHelper(root, expectedSum, path, currentSum, res) {
    if (!root) {
        return;
    }
    path.push(root.val);
    currentSum = currentSum + root.val;
    if (root.left === null && root.right === null) {
        if (currentSum === expectedSum) {
            res.push([...path])
        }
        return;
    } else {
        if (root.left) {
            dfsHelper(root.left, expectedSum, path, currentSum, res);
            path.pop();
        }
        if (root.right) {
            dfsHelper(root.right, expectedSum, path, currentSum, res);
            path.pop();
        }
    }
}

/**
 *           5
 *     4          8
 * 11     13
 */
console.log(pathSum(constructTreeFromArray([5, 4, 8, 11, 13]), 20))
// console.log(pathSum(constructTreeFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22))