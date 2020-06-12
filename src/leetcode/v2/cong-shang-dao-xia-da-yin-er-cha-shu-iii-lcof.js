/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * //              1
    //       2           3
    //   4      5      6    7
     8    9  10 11  12  13  14     15
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    let res = [];
    let cur;
    let levelLen = 0;
    let levelArr = [];
    let queue = [root];
    let levelOrder = 1;
    //往leftArr放和queue放正好是相反的
    while (queue.length) {
        /**
         * 1. 遍历本层所有节点
         */
        levelLen = queue.length;
        let i = 0;
        while (i < levelLen) {
            //将queue出列
            cur = queue.pop();
            if(levelOrder % 2 === 0){
                levelArr.unshift(cur.val);
            } else {
                levelArr.push(cur.val);
            }
            cur.left && queue.unshift(cur.left);
            cur.right && queue.unshift(cur.right);
            i++;
        }
        levelOrder++;
        if (levelArr.length > 0) {
            res.push([...levelArr]);
            levelArr.length = 0;
        }
    }
    return res;
};
const constructTreeFromArray = require('../lib/constructTreeFromArray');

console.log(levelOrder(constructTreeFromArray([1,2,3,4,5,6,7,8,9,10,11,12])));