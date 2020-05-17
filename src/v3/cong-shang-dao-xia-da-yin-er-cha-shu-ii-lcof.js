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
var levelOrder = function(root) {
    let res = [];
    if(!root){
        return res;
    }
    /*
        1. 利用queue性质
        2. 将当前一整层节循环点放入临时数组，边进边出
    */
    let cur;
    let subArr = [];
    let queue = [root];
    while(queue.length){
        //先不要出列，记住当前层的节点数量，
        let lenLevel = queue.length;
        let i = 0;
        //这里不能直接用queue.length，循环过程中一直
        while(i<lenLevel){
            cur = queue.pop();
            //节点放入subArr
            subArr.push(cur.val);
            //FIFO
            cur.left && queue.unshift(cur.left);
            cur.right && queue.unshift(cur.right);
            i++;
        }
        //已经将当前层节点放入subArr, 下层节点放入queue
        if(subArr.length){
            res.push([...subArr])
            subArr.length = 0;
        }
    }
    return res;
};

const constructTreeFromArray = require('../lib/constructTreeFromArray');
console.log(levelOrder(constructTreeFromArray([1,4,3,2])));