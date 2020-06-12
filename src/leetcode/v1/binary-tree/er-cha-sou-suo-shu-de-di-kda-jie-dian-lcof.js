// 给定一棵二叉搜索树，请找出其中第k大的节点。
// 二叉搜索树的中序遍历正好是一个递增的序列, 因此中序遍历的第K个结点就是二叉搜索树的第K个节点
// * BST的中序遍历是升序
// * 排完序后返回元素
// 示例 1:

// 输入: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// 输出: 4
// 示例 2:

// 输入: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// 输出: 4

const { TreeNode } = require('../lib/TreeNode');
const constructTreeFromArray = require('../lib/constructTreeFromArray');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    var res = [];
    var stack = [];
    var cur = root;
    while(cur||stack.length){
        while(cur){
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        res.push(cur.val);
        cur = cur.right;
    }
    return res[res.length-k];
};

var root = constructTreeFromArray([5, 3, 6, 2, 4, null, null, 1]);
console.log(kthLargest(root, 3));
