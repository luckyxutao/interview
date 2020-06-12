
// 题目要求不能使用除法，所以你求出所有的数的乘积，然后再除以每个数构结果集的第一想法就流产了；

// 这道题就是要求结果数组上的每一个数，都是原数组除了这个位置的数的乘积；

// https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof/solution/java-pythonchao-xiang-xi-jie-ti-by-yang_hang/

/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (arr) {
    /**
     * 当前元素左边积的数组(对应每个元素)
     *  说明:第一个元素左边是1，第2个元素左边也是1，第三个元素3左边是（1*2）=2，没有左/右元素时以1代替
     * leftArr积[1,1,2,6,24]
     * rightArr积[120,60,20,5,1]
     */
    //l
    //rightArr积[]
    let leftArr = [];
    let leftSum = 1;
    for (let i = 0; i < arr.length; i++) {
        leftSum = leftSum * (i === 0 ? 1 :arr[i - 1])
        leftArr.push(leftSum);
    }

    let rightArr = [];
    let rightSum = 1;
    let j = arr.length - 1;
    let res = [];
    while (j >= 0) {
        rightSum = rightSum * (j === arr.length -1 ? 1 : arr[j + 1]);
        res[j] = rightSum * leftArr[j];
        j--;
    }
    return res;
};
//[1,1,2,0,0]
constructArr([1, 2, 0, 4, 5]);




// 给定一个数组A[0, 1, …, n-1]，请构建一个数组B[0, 1, …, n-1]，其中 B 中的元素B[i] = A[0] × A[1] × … × A[i - 1] × A[i + 1] × … × A[n - 1]。

// 不能使用除法。

// 样例：

// 输入：[1, 2, 3, 4, 5]

// 输出：[120, 60, 40, 30, 24]