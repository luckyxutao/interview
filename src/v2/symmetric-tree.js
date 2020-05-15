/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * //         1
    //     2        2
    //  3    4   4    3
 */
var isSymmetric = function (root) {
    if (!root) {
        return true;
    }
    let queue = [root,root];
    let cur;
    while (queue.length) {
        let p1 = queue.pop();
        let p2 = queue.pop();
        if(p1 == null && p2 == null){
            continue;
        }
        if(!p1 && p2){
            return false;
        }
        if(p1 && !p2){
            return false;
        }
        if(p1.val !== p2.val){
            return false;
        }
        queue.unshift(p1.left);
        queue.unshift(p2.right);
        queue.unshift(p1.right);
        queue.unshift(p2.left);
    }
    return true;
};
const constructTreeFromArray = require('../lib/constructTreeFromArray');
let root2 = constructTreeFromArray([1,0]);
console.log(isSymmetric(root2))


/**
 * 是否是镜像二叉树-递归版
 * @param {根节点} root 
 */
var isSymmetricWithRecursion = function (root) {
    if (!root) {
        return true;
    }
    return symmetricHelper(root.left, root.right);
};
function symmetricHelper(node1, node2) {
    //中止条件
    if (!node1 && !node2) {
        return true;
    }
    if (!node1 && node2) {
        return false;
    }
    if (node1 && !node2) {
        return false;
    }
    if (node1.val !== node2.val) {
        return false;
    }
    return symmetricHelper(node1.left, node2.right) && symmetricHelper(node1.right, node2.left);
}