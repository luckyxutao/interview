/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
//https://mp.weixin.qq.com/s?__biz=MjM5ODYxMDA5OQ==&mid=2651961587&idx=1&sn=54bf39db7043cc638315caf70f24d94b&chksm=bd2d0d2f8a5a84395246be4522d10fbfc1f744658047d5fb3fad8e9f3c3d76baab3a2ce84867&scene=0&ascene=7&devicetype=android-27&version=2607023a&nettype=WIFI&abtest_cookie=BAABAAoACwASABMABAAjlx4AS5keAGiZHgBsmR4AAAA=&lang=zh_CN&pass_ticket=CNGHjMe4%20oqSNOfkGh8SdOJnVubfLCtVFspVUC/VdFlhJhG7YjHErceAvGAgjdxF&wx_header=1
var getLeastNumbers = function (arr, k) {
    let topK = quickSelect(arr, 0, arr.length - 1, k);
    return arr.slice(0,k);
};

function quickSelect(arr, low, hight, k) {
    if (low >= hight) {
        return;
    }
    /**
     * 1. 比i大的放右边，比i小的放左边，最后t放在中间N[i]。
     * 2. i-w /看看左边有几个，是否能满足第k个，
     */
    var i = partition(arr, low, hight);
    quickSelect(arr, low, i - 1);
    quickSelect(arr, i + 1, hight)
    // var leftCount = i - low; //因为是升序，左边是当于i的
    // if (leftCount >= k) { //求前半部分第k大
    //     quickSelect(arr, low, i - 1, k);
    // } else {
    //     quickSelect(arr, i + 1, hight, k - i);//求后半部分第k-i大
    // }
}

function partition(arr, low, hight) {
    let i = low + 1, j = hight;
    let pviot = arr[low];
    while (i <= j) {
        while (i <= j && arr[i] < pviot) {
            i++;
        }
        while (i <= j && arr[j] > pviot) {
            j--;
        }
        if (i <= j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    //j已经小于i了,low始终没变(piviot来源)
    //循环结束时，i>j了，splitPoint是i-1前一个
    arr[low] = arr[j];
    arr[j] = pviot;
    return j;
}

console.log(getLeastNumbers([0,1,1,1,4,5,3,7,7,8,10,2,7,8,0,5,2,16,12,1,19,15,5,18,2,2,22,15,8,22,17,6,22,6,22,26,32,8,10,11,2,26,9,12,9,7,28,33,20,7,2,17,44,3,52,27,2,23,19,56,56,58,36,31,1,19,19,6,65,49,27,63,29,1,69,47,56,61,40,43,10,71,60,66,42,44,10,12,83,69,73,2,65,93,92,47,35,39,13,75],75))