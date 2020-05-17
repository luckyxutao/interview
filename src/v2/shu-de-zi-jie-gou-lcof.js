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
    if (!A) {
        return false;
    }
    if(!B){
        return false;
    }
    //节点值和B相等，才有资格进一步比较
    if (A.val == B.val) {
        let res = isSubStructureHelper(A, B);
        if(res){
            return true;
        } else {
            return isSubStructure(A.left,B) || isSubStructure(A.right,B);
        }

    }
    return isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

function isSubStructureHelper(A, B) {
    //可能B已经完了，A还未完成，需要返回true
    if (!B) {
        return true;
    }
    if (!A && !B) {
        return true;
    }
    if ((A && !B) || (!A && B)) {
        return false;
    }
    if (A.val !== B.val) {
        return false;
    }
    return isSubStructureHelper(A.left, B.left) && isSubStructureHelper(A.right, B.right);
}
const constructTreeFromArray = require('../lib/constructTreeFromArray');
let treeA = constructTreeFromArray([4, 2, 3, 4, 5, 6, 7, 8, 9]);
let treeB = constructTreeFromArray([4, 8,9]);
console.log(isSubStructure(treeA, treeB));