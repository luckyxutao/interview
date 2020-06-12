const { TreeNode, root } = require('../lib/TreeNode');
const constructTreeFromArray = require('../lib/constructTreeFromArray');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** 后序遍历 = reverse(前序遍历(从右开始))
 * 本质和前序遍历相同
    后序遍历= reverse(preOrderTraversal(从右开始))
    正常前序是中-左-右，后序遍历 = reverse(中-右-左)
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = [];
    if(!root){
        return res;
    }
    let st = [root];
    let cur;
    while(st.length){
        //取出当前元素
        cur = st.pop();
        res.unshift(cur.val);
        cur.left && st.push(cur.left);
        cur.right && st.push(cur.right);
    }
    return res;
};

let root2 = constructTreeFromArray([1,2,3,4,5,6]);
console.log(postorderTraversal(root2))

/**
 * 后序-递归版
 * @param {*} root 
 */
function postorderTraversalWithRecursion(root){
    let res = [];
    if(!root){
        return res;
    }
    dfsHelper(root,res);
    return res;
}

function dfsHelper(node,res){
    if(!node){
        return;
    }
    node.left && dfsHelper(node.left,res);
    node.right && dfsHelper(node.right,res);
    res.push(node.val);
}
