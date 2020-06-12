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
    3
   / \
  9  20
    /  \
   15   7
 */
var isBalanced = function (root) {
    if (!root) {
        return true;
    }
    /** 递归法-有大量重复
     * 1. 自顶向下，求左右高度，计算差值
     */
    let leftHeight = getNodeHeight(root.left);
    let rightHeight = getNodeHeight(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
};
function getNodeHeight(node) {
    if (!node) {
        //没有了返回0,不表示不稳定
        return 0
    }
    return Math.max(getNodeHeight(node.left), getNodeHeight(node.right)) + 1;
}

const constructTreeFromArray = require('../lib/constructTreeFromArray');
console.log(isBalanced(constructTreeFromArray([1,2,2,3,3,null,null,4,4]), 3));



// var isBalanced = function (root) {
//     if (!root) {
//         return true;
//     }
//     /** 自下向上
//      * 1. 从叶子节点向下，-1表示不平衡,>0表示高度
//      * 2. 比较左右节点高度，是否满足avl，不满足-1，否则是节点的maxDepth
//      * 3. 最后看高度是-1还是其它的
//      */
//     return balancedHelper(root) > -1;
// };
// function balancedHelper(node) {
//     if (!node) {
//         //没有了返回0,不表示不稳定
//         return 0
//     }
//     let leftHeight = balancedHelper(node.left);
//     let rightHeight = balancedHelper(node.right);
//     //如果有一边是-1，则表明不平衡
//     if (leftHeight == -1 || rightHeight == -1) {
//         return -1;
//     }
//     //如果差值大于1,返回-1
//     if (Math.abs(leftHeight - rightHeight) > 1) {
//         return -1;
//     }
//     //如果都不是-1，将左、右最大height+当前返回
//     return Math.max(leftHeight, rightHeight) + 1;
// }