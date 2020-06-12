
function mergeSort(num) {
    return helper(num, 0, num.length - 1);
}
function helper(num, lo, hi) {
    if (lo === hi) {
        return [num[lo]]
    }
    let mid = lo + Math.floor((hi - lo) / 2);
    let leftSorted = helper(num, lo, mid);
    let rightSorted = helper(num, mid + 1, hi);
    return merge(leftSorted, rightSorted);
}
//[1,8],[2,9]
function merge(aNum, bNum) {
    let res = [];
    while (aNum.length && bNum.length) {
        if(aNum[0]<=bNum[0]){
            res.push(aNum.shift());
        } else {
            res.push(bNum.shift());
        }
    }
    return aNum.length > 0 ? res.concat(aNum) : res.concat(bNum);
}
// 要的是升序,低位大于高低，则交换
// var arr = [3,2,4,6,5,1,7,8];
var arr = [5,1,1,2,0,0];
// //要升序
let res = mergeSort(arr);
console.log(res);

// var sorted = merge([1, 1, 5], [0, 0, 2]);
// console.log(sorted)