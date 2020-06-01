/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
    /*
        1 2 3 4 5
                
    */
    //   x左边的乘积，不包含x
    let leftArr = [];
    let res = [];
    for (let i = 0; i < a.length; i++) {
        leftArr[i] = i == 0 ? 1 :  a[i - 1] * leftArr[i - 1];
    }
    let rightArr = [];
    for(let i = a.length-1;i>=0;i-- ){
        rightArr[i] = i === a.length -1 ? 1 : a[i+1] * rightArr[i+1]; 
        res.unshift(rightArr[i]*leftArr[i]);
    }
    return res;

};

constructArr([1, 2, 3, 4, 5])
//            1  1  2  6  24
          // 120 60 20 5  1