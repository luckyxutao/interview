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
var serialize = function(root) {
    let res = [];
    if(!root){
        return res;
    }
    let queue = [root];
    while(queue.length){
        let cur = queue.pop();
        if(!cur){
            res.push(cur);
            continue;
        }
        res.push(cur ? cur.val :null);
        queue.unshift(cur ?cur.left:null);
        queue.unshift(cur ?cur.right:null);
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
    if(!data.length){
        return null;
    }
    let root = new TreeNode(data[0]);
    let i = 0;
    let queue = [root];
    while(i<data.length){
        let cur = queue.pop();
        if(i<data.length){
            if(data[i]!==null){
                cur.left = new TreeNode(data[i]);
                queue.unshift(cur.left);
            }
            i++;
        }
        if(i<data.length){
            if(data[i]!==null){
                cur.right = new TreeNode(data[i]);
                queue.unshift(cur.right);
            }
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */




const { TreeNode } = require('../lib/TreeNode');
const constructTreeFromArray = require('../lib/constructTreeFromArray');

var data = constructTreeFromArray([1,2,3,null,null,4,5]);
console.log(serialize(data));









/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// var constructLinkedList = require('../lib/constructLinkListFromArray');
// // 1->2->3->4->5->6
// var gg1 = constructLinkedList([4,5,1,9]);
// console.log(deleteNode(gg1, 5));
