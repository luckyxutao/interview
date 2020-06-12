/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    /*
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
        1. 标准的回溯法，每走一步(入path),expectedNum - root.val
        2. 当前节点是叶子节点时，就判断值是不是能满足sum
        3. 不等到节点都为空了

    */
    let res = [];
    let path = [];
    dfsHelper(root, path, sum, res);
    return res;
};

function dfsHelper(root, path, expectedNum, res) {
    //为空中止，判断叶子节点要比这提前
    if (!root) {
        return;
    }
    /*
        如果是叶子节点，做判断
    */
    if(!root.left && !root.right){
        //此时还没入path
        if(expectedNum === root.val){
            res.push([...path,root.val]);
            return
        }
    }
    //当前节点入path，在这个位置都是有机会回溯的，
    path.push(root.val);
    //下一层需要的sum为 expectedNum - root.val，左右子孩子是一样的
    dfsHelper(root.left, path, expectedNum - root.val, res);
    dfsHelper(root.right, path, expectedNum - root.val, res);
    path.pop(root.val);

}


const constructTreeFromArray = require('../lib/constructTreeFromArray');
console.log(pathSum(constructTreeFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22));

function dfsHelper2(root, path, expectedNum, res) {
    //为空中止，判断叶子节点要比这提前
    if (!root) {
        return;
    }
    //当前节点入path，如果下边条件满足的话path是没机会回溯的，需要手动pop
    path.push(root.val);
    /*
        如果是叶子节点，做判断
    */
    if(!root.left && !root.right){
        //此时还没入path
        if(expectedNum === root.val){
            res.push([...path]);
            //因为path里已经满足条件了，但是return的话没机会pop（回溯了)
            path.pop();
            return
        }
    }

    //下一层需要的sum为 expectedNum - root.val，左右子孩子是一样的
    dfsHelper(root.left, path, expectedNum - root.val, res);
    dfsHelper(root.right, path, expectedNum - root.val, res);
    path.pop(root.val);

}