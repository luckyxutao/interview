//https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
/**
* 前提：数组中的数字各不相同。注意到题目中已经注明了：假设输入的数组的任意两个数字都互不相同。
*  根结点是后序遍历的最后一个元素，因此一定位于给定数组的最后一位；
*  那么给定数组的最后一位就可以把这个数组分为两个部分，前半部分严格小于最后一个数，后半部分严格大于最后一个数；
 */
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    return helper(postorder);
};

function helper(arr) {
    if (!arr || arr.length <=1) {
        return true;
    }
    var rootVal = arr[arr.length - 1];
    var middlePos = 0;
    while (arr[middlePos] < rootVal && middlePos < arr.length) {
        middlePos++;
    }
    var leftArr = arr.slice(0, middlePos);
    var rightArr = arr.slice(middlePos, arr.length - 1);
    var rightOk = rightArr.every((v) => v > rootVal);
    var leftOk = leftArr.every(v => v < rootVal);
    if (leftOk && rightOk) {
        return helper(leftArr) && helper(rightArr);
    } else {
        return false;
    }
}

 console.log(verifyPostorder([1,2,5,10,6,9,4,3]))