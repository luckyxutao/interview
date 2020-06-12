/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res = [];
    if(!root){
        return res;
    }
    let cur;
    let queue = [root];
    // bfs都是queue
    while(queue.length){
        let levelLen = queue.length;
        let i = 0;
        while(i<levelLen){
            cur = queue.pop();
            if(i==levelLen-1){
                res.push(cur.val)
            }
            cur.left && queue.unshift(cur.left);
            cur.right && queue.unshift(cur.right);
            i++;
        }
    }
    return res;
};
const constructTreeFromArray = require('../lib/constructTreeFromArray');
console.log(rightSideView(constructTreeFromArray([1,2,3,4,5,6,7,8])));