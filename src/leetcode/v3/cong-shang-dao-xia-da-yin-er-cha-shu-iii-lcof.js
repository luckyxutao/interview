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
    /*
        1.和水平打印题思路相同，区别在于往tempArr放的顺序
        2. 用一个变量记录奇偶
        3. 

    */
    let res = [];
    if (!root) {
        return res;
    }
    let cur;
    let subArr = [];
    let queue = [root];
    let levelIndex = 0;
    while (queue.length) {
        /*
            1. 记住当前层节点数量
            2. 循环queue，分别放入临时数组，并把下一节点放入queue
            3. 循环时不能直接取queue.length(因为循环过程中下一层节点会进队列，不是本层的了)
        */
        let lenLevel = queue.length;
        let i = 0;
        //循环当前层节点
        while (i < lenLevel) {
            cur = queue.pop();
            //奇层,默认第1层是顺
            if (levelIndex % 2) {//=1
                subArr.unshift(cur.val);
            } else {
                subArr.push(cur.val);
            }
            //按FIFO进队列
            cur.left && queue.unshift(cur.left);
            cur.right && queue.unshift(cur.right);
            i++;
        }
        levelIndex++;
        if (subArr.length > 0) {
            res.push([...subArr])
            subArr.length = 0;
        }
    }
    return res;
};

const constructTreeFromArray = require('../lib/constructTreeFromArray');
console.log(levelOrder(constructTreeFromArray([1, 2, 3, 4, 5, 6, 7])));