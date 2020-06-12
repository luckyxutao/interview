/**
    1
   / \
  2   2
 / \ / \
3  4 4  3
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    /*
        迭代法
        1. 利用队列BFS遍历
        2. 一次出两个如果相同则符合条件
        3. 

    */
    if (!root) {
        return true;
    }
    let queue = [root, root];
    while (queue.length) {
        let p = queue.pop();
        let q = queue.pop();
        if (!p && !q) {
            continue;
        }
        if (p && !q || !p && q) {
            return false;
        }
        if(p.val !== q.val){
            return false;
        }
        queue.unshift(p.left);
        queue.unshift(q.right);
        queue.unshift(p.right);
        queue.unshift(q.left);
    }
    return true;
};


const constructTreeFromArray = require('../lib/constructTreeFromArray');
console.log(isSymmetric(constructTreeFromArray([1, 2, 2, 3, 4, 4, 3])));

/*
    1. 递归实现
    1. 判断左右字树是否都满足
    

*/
var isSymmetricRecursion = function (root) {
    if (!root) {
        return true;
    }
    return isSymmetricHelper(root.left,root.right) 
};
function isSymmetricHelper(p, q) {
    //如果没有p也没有q
    if (!p && !q) {
        return true;
    }
    //只有一边 false
    if ((!p && q) || (p && !q)) {
        return false;
    }
    //说明p和q都有
    if (p.val !== q.val) {
        return false;
    }
    //p1.left == p2.right  p2.left == p1.right
    return isSymmetricHelper(p.left, q.right) && isSymmetricHelper(p.right, q.left);
}
