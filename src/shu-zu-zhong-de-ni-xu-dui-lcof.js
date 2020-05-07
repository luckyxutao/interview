/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    let count = 0;
    return count;
};

console.log(reversePairs([7, 5, 6, 4]))


/** 暴力法
7分别和[5,6,4]比，5分别和[6,4]比，6分别和[4]比 = 3 + 1 + 1 = 5
//  * @param {number[]} nums
//  * @return {number}
//  */
// var reversePairs = function(nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] > nums[j] ) {
//                 count++;
//             }
//         }
//     }
//     return count;
// };

//