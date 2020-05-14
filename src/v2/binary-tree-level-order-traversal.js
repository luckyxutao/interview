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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    let levelSubArr = [];
    let queue = [root];
    let res = [[root.val]];
    let cur;
    while (queue.length) {
        let len = queue.length;
        let i = 0;
        while(i<len){
            cur = queue.pop();
            cur.left && levelSubArr.push(cur.left.val);
            cur.right && levelSubArr.push(cur.right.val);
            cur.left && queue.unshift(cur.left)
            cur.right && queue.unshift(cur.right)
            i++;
        }
        if(levelSubArr.length>0){
            res.push([...levelSubArr]);
            levelSubArr.length = 0;
        }

    }
    return res;
};

console.log(levelOrder(constructTreeFromArray([3,9,20,null,null,15,7])));