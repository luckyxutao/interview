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
function Node(val,left,right) {
       this.val = val;
       this.left = left;
       this.right = right;
    };
var treeToDoublyList = function(root) {
    if(!root){
        return null;
    }
    let pre, head;
    function dfsHelper(root){
        if(!root){
            return null;
        }
        //左子树
        dfsHelper(root.left);
        //第一个节点，最最左边的元素是将来的head
        if(!pre){
            pre = new Node(root.val);
            head = pre;
        } else {
            let node = new Node(root.val);
            pre.right = node;
            node.left = pre;
            pre = node;
        }
        //
        dfsHelper(root.right);
    }
    dfsHelper(root);
    pre.right = head;
    return head;

};
const constructTreeFromArray = require('../lib/constructTreeFromArray');

console.log(treeToDoublyList(constructTreeFromArray([4,2,5,1,3])));