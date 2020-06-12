/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/single-number/solution/zhi-chu-xian-yi-ci-de-shu-zi-by-leetcode/
 */
var singleNumber = function (nums) {
    let a = 0;
    for (let i = 0; i < nums.length; i++) {
        a = a ^ nums[i];
    }
    return a;
};

console.log(singleNumber([3, 5, 3, 4, 8, 4, 8]));


// var a = 0

// //  101
// //  000
// // [1,3,5,7]

// console.log(a^a) //0
// console.log(a^0)//5