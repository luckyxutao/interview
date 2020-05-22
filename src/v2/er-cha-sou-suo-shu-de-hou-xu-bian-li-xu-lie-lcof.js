/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    /*
        1. 分治法，BST性质
        2. 每次以最后一个元素为根，将当前数组切割成left、right两部分
        3. 除了最后元素root外，
            leftArr = 剩下元素按照 小于root前，一直小于root
            rightArr = 当遇到大于root的,后边一直都要比root大
        4. 如果按上面规则，能到arr.length-1,则说明本轮符合条件
    */
    if (!postorder || !postorder.length) {
        return false;
    }

    return verifyPostorderHelper(postorder, 0, postorder.length - 1);


};

//两端闭[]
function verifyPostorderHelper(postorder, i, j) {
    //中止条件,只有1个元素不用分了
    //等 于j表示只有一个元素了，
    //大于j，表示当前节点不存在，比如有左孩子，没有右孩子
    if (i >= j) {
        return true;
    }
    //[1,3,2,6,5]
    let start = i;
    //从左边开始
    while (postorder[start] < postorder[j]) {
        start++;
    }
    //此时postorder[start]>postorder[j]
    let splitor = start;//中间分割点
    //之后每个元素都要大于postorder[j]
    while (postorder[start] > postorder[j]) {
        start++;
    }
    //如果此时start=== j，说明走到最右边了，是符合要求的
    //如果小于j，则说明按以上两条规则没走完，不符合
    if (start < j) {
        return false;
    }

    let isLeftOk = verifyPostorderHelper(postorder, i, splitor - 1);
    let isRightOk = verifyPostorderHelper(postorder, splitor, j - 1);//排除掉j，j是根目录
    return isLeftOk && isRightOk;
}



const constructTreeFromArray = require('../lib/constructTreeFromArray');
// console.log(verifyPostorder([1,3,2,6,5]));
console.log(verifyPostorder([1, 2, 5, 10, 6, 9, 4, 3]));