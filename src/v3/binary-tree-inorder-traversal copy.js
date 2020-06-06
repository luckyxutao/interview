/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root){
        return null;
    }
    /*
    分别找到p和q的路径(arr)
    */
    let tempPath = [];
    let pathP = [];
    let pathQ = [];
    //
    dfsHelper(root,pathP,tempPath,p)
    dfsHelper(root,pathQ,tempPath,q)
    let re = null;
    let prev = null;
    let i = 0;
    while(i<pathP.length && i< pathQ.length && pathP[i].val === pathQ[i].val){
        re = pathQ[i];
        i++;
    }
    return re;
};

function dfsHelper(root,res,path,target){
    //找到值为node的就中止
    //为空也中止
    if(!root){
        return null;
    }

    //如果找到结点
    if(root.val === target.val){
        //当前节点还没在path里
        res.push([...path,root])
        return;
    }
    path.push(root);
    dfsHelper(root.left,res,path,target);
    dfsHelper(root.right,res,path,target);
    path.pop();
}







