/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    let res = { count : 0}
    return mergeSort(nums, 0, nums.length - 1,res);
};
function mergeSort(nums, lo, hi,res) {
    //只剩下1个元素时中止
    if(lo == hi){
        return [nums[lo]];
    }
    /*
    1. 先二分
    2. 直到不能分了，合并
    */
    let mid = lo + Math.floor((hi - lo) / 2);
    let left = mergeSort(nums, lo, mid,res);//
    let right = mergeSort(nums, mid + 1, hi,res);
    return merge(left,right,res);
}

function merge(a,b,res){
    let newArr = [];
    /*
        5,7 ,
        4,6
    */
   a = [3,4,8,10] ;
   b = [2,8,9] 
    while(a.length && b.length){
        if(a[0]<b[0]){
            newArr.push(a.shift())
        } else {
            // 以b数组为基准, b[0]<a[0]时，说明目录因为a[0]就是最小的了，b[0]比a[0]还小，
            //因此a数组每个元素都可以和b[0]构成逆序对
            res.count = res.count + a.length
            newArr.push(b.shift())
        }
    }
    debugger
    return a.length > 0 ? newArr.concat(a) : newArr.concat(b);
}

console.log(reversePairs([7,5,6,4]))