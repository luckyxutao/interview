
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if(!root){
        return null;
    }
    helper(root);
    return root
};

function helper(root){
    if(!root){
        return;
    }
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    helper(root.left);
    helper(root.right);
}