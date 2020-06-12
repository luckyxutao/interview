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
    let res = [];
    let cur;
    while (queue.length) {
        //记住本层节点数量
        let len = queue.length;
        let i = 0;
        //此处不能直接取queue.length(不是本层节点了)
        while(i<len){
            cur = queue.pop();
            levelSubArr.push(cur.val);
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