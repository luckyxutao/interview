/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    /*
        1. 排序
    */
    let res = mergeSort(arr, 0, arr.length - 1);

};

function mergeSort(arr, lo, hi) {
    if (lo >= hi) {
        return [arr[lo]]
    }
    let mid = lo + Math.floor((hi - lo) / 2);
    let leftArr = mergeSort(arr, lo, mid);
    let rightArr = mergeSort(arr, mid + 1, hi);
    return merge(leftArr, rightArr)
}

function merge(leftArr, rightArr) {
    /*
        [1,3], [2,4]
    */
    let res = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            res.push(leftArr.shift())
        } else if (leftArr[0] > rightArr[0]) {
            res.push(rightArr.shift())
        }
    }
    return leftArr.length > 0 ? res.concat(leftArr) : res.concat(rightArr);
}

getLeastNumbers([0,1,2,1])