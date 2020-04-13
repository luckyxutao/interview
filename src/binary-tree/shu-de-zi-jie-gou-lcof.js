const { TreeNode } = require('../lib/TreeNode');
const constructTreeFromArray = require('../lib/constructTreeFromArray')


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
var isSubStructure = function(A, B) {
    if(!B){
        return false;
    }
    if(!A||!B){
        return false;
    }
    if(A.val === B.val){
        return dfsHelper(A,B);
        // dfsHelper() //子树对比
    } else {
        var findLeft = isSubStructure(A.left,B);
        var findRight = isSubStructure(A.right,B);
        if(findLeft||findRight){
            return findLeft||findRight;
        }
        return false;
    }
};

function dfsHelper(A,B){
    if(!B){
        return true
    }
    if(!A&!B){
        return true;
    }
    if(!A&&B || !B&&A){
        return false;
    }
    if(A.val !== B.val){
        return false;
    }
    return dfsHelper(A.left,B.left) && dfsHelper(A.right,B.right);
}

var treeA = constructTreeFromArray([3,5,0,3,4]);
var treeB = constructTreeFromArray([1,-4,2,-1,3,-3,-4,0,-3,-1]);
var result = isSubStructure(treeA,treeB);
console.log(result);