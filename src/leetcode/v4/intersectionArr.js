/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
     let res = [];
    if(!root){
        return res;
    }
    let queue = [root];
    let cur;
    let tmpArr = [];
    while(queue.length){
        let levelLen = queue.length;
        let i = 0;
        tmpArr.length = 0;
        while(i<levelLen){
            cur = queue.pop();
            tmpArr.push(cur.val);
            cur.left && queue.unshift(cur.left);
            cur.right && queue.unshift(cur.right);
            i++;
        }
        res.push([...tmpArr])
    }
    return res;
};


/*


给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false

*/
const constructTreeFromArray = require('../lib/constructTreeFromArray');
console.log(levelOrder(constructTreeFromArray([1,2,3,4,5])))
