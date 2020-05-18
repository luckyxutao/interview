/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if(!B){
        //空数组不是任何树的子树
        return false;
    }
    /*
        1. 一个函数用来对比A、B是否相同
        2. 主函数用来在A中查找与B相同的结点
        3. A中可能有重复元素，相同返回,否则继续在A树里搜索
    */
    if (!A) {//已经是A的叶子
        return;
    }
    //找到了，则有资格对比，否则
    if (A.val === B.val) {
        let res = subStructureHelper(A, B);
        if (res) {
            return true;
        } else {
            //如果4的位置分布在两边是有问题的
            return isSubStructure(A.left, B) || isSubStructure(A.right, B);
        }
    }
    return isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

function subStructureHelper(A, B) {
    if (!B) {
        return true;
    }
    //都没有的情况，为true
    if (!A && !B) {
        return true;
    }
    //
    if (!A && B || A && !B) {
        return false;
    }
    if (A.val !== B.val) {
        return false;
    }
    return subStructureHelper(A.left, B.left) && subStructureHelper(A.right, B.right);
}

const constructTreeFromArray = require('../lib/constructTreeFromArray');
let treeA = constructTreeFromArray([4, 2, 3, 4, 5, 6, 7, 8, 9]);
let treeB = constructTreeFromArray([4, 8,9]);
console.log(isSubStructure(treeA, treeB));