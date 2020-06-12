const { TreeNode } = require('./TreeNode');

function constructTree(arr) {
    var rootNode = new TreeNode(arr.shift());
    var queue = [rootNode];
    var count = 0;
    while (queue.length && count < arr.length) {
        var cur = queue.pop();
        if (count < arr.length) {
            let hasVal = arr[count++];
            if (hasVal!==null) {
                var left = new TreeNode(hasVal);
                cur.left = left;
                queue.unshift(left);
            }
        }
        if (count < arr.length) {
            let hasVal = arr[count++];
            if (hasVal!==null) {
                var right = new TreeNode(hasVal);
                cur.right = right;
                queue.unshift(right);
            }
        }
    }
    return rootNode;
}
module.exports = constructTree;
// var re = constructTree([8, 12, 2, null, null, 6, 4, null, null, null, null]);
// var re = constructTree([5,3,6,2,4,null,null,1]);
// var re = constructTree([0,2,4,1,null,3,-1,5,1,null,6,null,8]);