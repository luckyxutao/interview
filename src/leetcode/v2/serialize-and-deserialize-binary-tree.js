/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { TreeNode } = require('../lib/TreeNode')
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) {
        return [];
    }
    let cur;
    let queue = [root];
    let res = [];
    while (queue.length) {
        cur = queue.pop();
        if (!cur) {
            res.push(null);
            continue
        } else {
            res.push(cur.val);
        }
        queue.unshift(cur.left);
        queue.unshift(cur.right);
    }
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if(!data || data.length == 0){
        return null;
    }
    /*
        根据数组构建二叉树,
        按BFS宽度优先方式构建
    */
    var root = new TreeNode(data[0]);
    let count = 1;
    let queue = [root];
    while (count < data.length && queue.length) {
        let cur = queue.pop();
        if (data[count]!==null) {
            cur.left = new TreeNode(data[count]);
            queue.unshift(cur.left);
        }
        count++;
        if(count < data.length){
            if(data[count]!==null){
                cur.right = new TreeNode(data[count]);
                queue.unshift(cur.right);
            }
        }
        count++;

    }
    return root;
};

const constructTreeFromArray = require('../lib/constructTreeFromArray');
// let root2 = constructTreeFromArray([1, 2, 3, 4, 5]);
let root2 = constructTreeFromArray([1, 2, 3, 4, 5, null, 7]);
console.log(deserialize([-1,0,1]))

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// let arr = [1,2,3,null,null,4,5];
// deserialize(arr);