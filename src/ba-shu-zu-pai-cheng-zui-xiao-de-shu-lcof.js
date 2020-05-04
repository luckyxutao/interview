/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums.join('')
};

function quickSort(nums, lo, hi) {
    if (lo > hi) {
        return;
    }
    let i = partition(nums, lo, hi);
    quickSort(nums, lo, i - 1);
    quickSort(nums, i + 1, hi);
}
function beforeLager(a, b) {
    let x1 = a + '' + b;
    let x2 = b + '' + a;
    if (x1 > x2) {//
        return true;
    }
    return false;
}
// 从low到hi，以首元素为povit，小的放左边，大的放右边
function partition(nums, lo, hi) {
    let i = lo + 1, j = hi;
    let pivot = nums[lo];
    while (i <= j) {
        //10,3  10,3还是3,10
        while (i <= j && (!beforeLager(nums[i], pivot))) {
            i++;
        }

        while (i <= j && beforeLager(nums[j], pivot)) {
            j--;
        }

        if (i <= j) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
    //到这步i>j了
    nums[lo] = nums[j];
    nums[j] = pivot;
    return j;
}
// var arr = [10, 2, 3, 80, 20, 40];
var arr = [2, 14,10,19];
console.log(minNumber(arr));

// console.log(minNumber([10, 2]));
