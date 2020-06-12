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
    /**
     * 1. 前序遍历方式
     * 2. 交换左右节点
     * 
     */
    if(!root){
        return null;
    }
    let cur;
    let stack = [root];
    while(stack.length){
        //cur为null,stack里从根开始的左孩子
        //从stack去
        cur = stack.pop();
        //交换
        let temp = cur.left;
        cur.left = cur.right;
        cur.right = temp;
        
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);
    }
    return root;
};