
const { TreeNode, root } = require('../lib/TreeNode');
const constructTreeFromArray = require('../lib/constructTreeFromArray');
/**
 * 利用队列先进先出的性质,
 * 把下一层节点放入队列里
 * @param {*} root 
 */
var levelOrder = function(root) {
    let res = [];
    if(!root){
        return res;
    }
    let queue = [root];
    let cur;
    while(queue.length){
        cur = queue.pop();
        res.push(cur.val);
        cur.left && queue.unshift(cur.left);
        cur.right && queue.unshift(cur.right);
    }
    return res;
}

console.log(levelOrder(constructTreeFromArray([1, 2, 3, 4, 5, 6])));