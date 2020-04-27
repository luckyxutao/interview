/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    return randomized_selected(arr, 0, arr.length-1, k)
};

function randomized_selected(arr,lo,hi,k){
    
}

var arr = [4, 5, 1, 6, 2, 7, 3, 8];
console.log(getLeastNumbers(arr));