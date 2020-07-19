/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
    let leftArr = [];
    for(let i = 0;i<a.length;i++){
        leftArr[i] = i > 0 ? leftArr[i-1]*a[i-1] : 1;
    }
    let rightArr = [];
    let res = [];
    for(let j = a.length-1;j>=0;j--){
        rightArr[j] = j == a.length-1 ? 1 : a[j+1]* rightArr[j+1];
        res[j] = rightArr[j] * leftArr[j];
    }
    return res;
};

constructArr([1,2,3,4,5])