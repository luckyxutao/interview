/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let depth = 0;
    let queue = [root];
    let cur;
    let tempArr = [];
    while(queue.length){
        let len = queue.length;
        let i = 0;
        while(i<len){
            cur = queue.pop();
            tempArr.push(cur.val);
            cur.left && queue.unshift(cur.left);
            cur.right && queue.unshift(cur.right);
            i++;
        }
        depth++;
    }
    return depth
};
function countHelper(node) {
    if (!node) {
        return 0;
    }
    //当前left深度，等于 1当前也算一层 + 下一层的深度
    let left = countHelper(node.left) + 1;
    //当前right深度，等于 1 + 下一层的深度
    let right = countHelper(node.right) + 1;
    return Math.max(left, right);
}
const constructTreeFromArray = require('../lib/constructTreeFromArray');
// let root2 = constructTreeFromArray([1, 2, 3, 4, 5]);
let root2 = constructTreeFromArray([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(root2))
