// 所有节点不重复
// 方法一
// 一旦左子树和右子树都找到节点了（p或q)
// left为null或right为null说明节点在一边
// 如果只在一边找到（left或right),则该节点就是最近祖先（无论后续结点在左还是在右）
//
// 方法二
// 找到两个节点的从根节点开始的路径，存储在链表或者数组中
// 比较两条路径最后一个相同的节点
//
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { TreeNode } = require('../lib/TreeNode');
const constructTreeFromArray = require('../lib/constructTreeFromArray')
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
    var path = [];
    var res = [];
    dfsHelper(root, res, path, p, q);

    if (res.length === 1) {
        return res[0][res[0].length-1];
    } else if (res.length > 1) {
        const [first, second] = res;
        let j = first.length - 1;
        while (j >= 0) {
            var pos = second.findIndex((v)=>{
                return v.val === first[j].val;
            })
            if (pos > -1) {
                return second[pos]
            }
            j--
        }
    }

};
function dfsHelper(root, res, path, p, q) {
    if (!root) {
        return;
    }
    path.push(root);
    if (root.val === p.val || root.val === q.val) {
        res.push([...path])
        return
    }
    if (root.left) {
        dfsHelper(root.left, res, path, p, q);
        path.pop();
    }
    if (root.right) {
        dfsHelper(root.right, res, path, p, q);
        path.pop();
    }
}
// var lowestCommonAncestor = function (root, p, q) {
//     if (!root) {
//         return null;
//     }
//     if (root.val === p.val || root.val === q.val) {
//         return root;
//     }
//     var left = lowestCommonAncestor(root.left, p, q);
//     var right = lowestCommonAncestor(root.right, p, q);
//     if (left && right) {
//         return root;
//     } else if (left) {
//         return left;
//     } else if (right) {
//         return right;
//     } else {
//         return null;
//     }
// };
var root = constructTreeFromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
console.log(lowestCommonAncestor(root, new TreeNode(5), new TreeNode(4)));