/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    if (!postorder || !postorder.length) {
        return;
    }
    return verifyPostorderHelper(postorder, 0, postorder.length - 1);
};

function verifyPostorderHelper(postorder, lo, hi) {
    if (lo >= hi) {
        return false;
    }
    //取最后一个元素
    let root = postorder[hi];
    //leftTree应该是递增的，都比root小
    let start = lo;
    while (postorder[start] < root && start < hi) {
        start++;
    }
    //mid点
    let mid = start;
    while (postorder[start] > root && start < hi) {
        start++;
    }
    if (start !== hi) {
        return false;
    }
    return verifyPostorderHelper(postorder, lo, mid - 1) && verifyPostorderHelper(postorder, mid, hi - 1);

}

verifyPostorder([1, 2, 5, 10, 6, 9, 4, 3])