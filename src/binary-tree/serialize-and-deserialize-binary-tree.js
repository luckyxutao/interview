const { TreeNode } = require('../lib/TreeNode')
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    var res = [root.val];
    var queue = [root];
    while(queue.length){
        var cur = queue.pop();
        if(cur.left){
            res.push(cur.left.val);
            queue.unshift(cur.left);
        } else {
            res.push(null);
        }
        if(cur.right){
            res.push(cur.right.val);
            queue.unshift(cur.right);
        } else {
            res.push(null);
        }
    }
    console.log(res);
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (!data || data.length === 0) {
        return;
    }
    var root = new TreeNode(data[0]);
    var queue = [root];
    var count = 1;
    while (queue.length && count < data.length) {
        var cur = queue.pop();
        if (data[count] !== null) {
            cur.left = new TreeNode(data[count]);
            queue.unshift(cur.left);
        }
        count++;
        if (count < data.length) {//这里可能导致数组越界，
            if (data[count] !== null) {
                cur.right = new TreeNode(data[count]);
                queue.unshift(cur.right);
            }
            count++;
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
var tree = deserialize([1,2,3,null,null,4,5]);
var re = serialize(tree);
console.log(re);
