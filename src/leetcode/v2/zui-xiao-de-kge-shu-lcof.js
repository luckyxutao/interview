/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    if(!arr || !arr.length){
        return null;
    }
    let sorted = quickSort(arr, 0, arr.length - 1);
    return arr.slice(0,k)
};
function quickSort(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    let mid = partition(arr, lo, hi);
    quickSort(arr, lo, mid - 1);
    quickSort(arr, mid + 1, hi);
}

//[1,3,5,2]
function partition(arr, lo, hi, mid) {
    let pivot = arr[lo];//最左边为哨
    let i = lo + 1, j = hi;
    //升序
    while (i <= j) {
        //左边的小的话，一直右移
        while (i <= j && arr[i] < pivot) {
            i++;
        }

        while (i <= j && arr[j] > pivot) {
            j--;
        }
        if(i<=j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }

    }
    arr[lo] = arr[j];
    arr[j] = pivot;
    return j;
}

getLeastNumbers([0,0,0,2,0,5],0)