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
const {TreeNode} = require('../lib/TreeNode')
var serialize = function(root) {
    let res = [];
    if(!root){
        return res;
    }
    let cur;
    //levelOrder
    let queue = [root];
    while(queue.length){
        cur = queue.pop();
        if(cur == null){
            res.push(cur);
            continue;
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
var deserialize = function(data) {
    if(!data || data.length==0){
        return null
    }
    let count = 1;
    let root = new TreeNode(data[0]);
    let queue = [root];
    let cur;
    while(count < data.length){
        cur = queue.pop();
        if(data[count] !== null){
            cur.left = new TreeNode(data[count]);
            queue.unshift(cur.left);
        }
        //能不能用都要消耗一个
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



let tree = deserialize([1,2,3,null,null,4,5])










/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */