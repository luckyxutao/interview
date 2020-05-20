/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {

    /*
        左闭右闭类型
        [lo,hi)
    */
    let lo = 0, hi = numbers.length - 1, mid;
    while (lo <= hi) {
        mid = lo + Math.floor((hi - lo) / 2);
        //说明在arr2,
        if (numbers[mid] < numbers[hi]) {
            hi = mid;
        } //说明mid在arr1,
        else if (numbers[mid] > numbers[hi]) {
            lo = mid + 1;
        } else if (numbers[mid] == numbers[hi]) {
            //如果lo==hi的话直接返回
            hi = mid
        }
    }
    //lo和hi都在闭区间
    return numbers[lo]
    //最后lo = hi+1的;,lo>hi

};

// console.log(minArray([3,1,3]));
// console.log(minArray([1,1]));
console.log(minArray([1,3,5]));