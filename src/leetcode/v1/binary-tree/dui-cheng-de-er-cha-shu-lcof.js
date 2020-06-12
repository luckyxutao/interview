/**
 * 左子树的左节点和右子树的右节点对比
 * 左子树的右节点和右子树的左节点对比
 * 递归法
 * 利用栈
 */


const { TreeNode, root } = require('../lib/TreeNode');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root){
        return true
    }
    var stack = [root,root];
    while(stack.length){
        var v1 = stack.pop();
        var v2 = stack.pop();
        if(!v1&&!v2){
            continue;
        }
        if(!v1&&v2||v1 &&!v2){
            return false;
        }
        if(v1.val === v2.val){
            stack.push(v1.right);
            stack.push(v2.left);
            stack.push(v1.left);
            stack.push(v2.right);
        } else {
            return false;
        }

    }
    return true;
};

//       10
//    9        20
//      35   15    24
// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/submissions/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root){
        return true
    }
    return helper(root.left,root.right);
};

function helper(L,R){
    if(!L&&!R){
        return true;
    }
    if(L&&!R||!L&&R){
        return false;
    }
    if(L.val === R.val){
        return helper(L.left,R.right) && helper(L.right,R.left);
    } else {
        return false;
    }
}
