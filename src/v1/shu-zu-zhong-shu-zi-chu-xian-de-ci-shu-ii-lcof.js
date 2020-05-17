/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let i = 0;
    let h = 1;
    let cnt1 = 0;
    let res = [];
    while (i < 32) {
        cnt1 = 0;
        cnt0 = 0;
        for (let j = 0; j < nums.length; j++) {
            // 001
            // 011
            let n = nums[j]; //011
            if ((h & n) === 0) {
            } else {
                cnt1++;
            }
        }
        //cnt1大于0 
        if(cnt1 > 0){
            //并且该位1的个数正好是3的倍数，则说明结果值的该位是0（是1就不是3的倍数了）
            if(cnt1 % 3 === 0){
                res.unshift(0);
            } else { //如果1的个数不是3的倍数，则说明结果值的该位是1(是0的话，1的个数就是3的倍数了)
                res.unshift(1);
            }
        } else {//如果所有位都是0的话，都是0
            res.unshift(0);
        }
        h <<= 1;
        i++;
    }
    let cur;
    let sum = 0;
    let k = 31,mi = 0
    while (k > -1) {
        cur = res[k];
        if (cur === 1) {
            sum += Math.pow(2, mi);
        }
        mi++;
        k--;
    }
    return sum;
};
/**
 *    0 1 1 //3
 *    0 1 1 //3
 *    0 1 1 //3
 *    1 0 0 //4
 *    00011
 *    00011
 *    00011
 * 11010110
 */

console.log(singleNumber([3, 4, 3, 3]));
//          4  2  0 
// //11010  1  1  0

// 196+16+6