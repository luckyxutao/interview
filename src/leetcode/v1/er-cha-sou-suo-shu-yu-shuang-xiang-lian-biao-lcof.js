const { TreeNode } = require('./lib/TreeNode');
function LinkNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
};
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    var pre, head;
    function dfsHelper(node) {
        if (!node) {
            return;
        }
        dfsHelper(node.left);
        if (!pre) {
            pre = new LinkNode(node.val);
            head = pre;
        } else {
            var cur = new LinkNode(node.val);
            pre.right = cur; //前一个元素next是当前
            cur.left = pre;
            pre = cur;//更新指针，成为下一个节点的pre
        }
        dfsHelper(node.right);

    }
    dfsHelper(root);
    head.left = pre;
    pre.right = head;
    return head;
};


const constructTreeFromArray = require('./lib/constructTreeFromArray');

var data = constructTreeFromArray([4, 2, 5, 1, 3]);
console.log(treeToDoublyList(data));