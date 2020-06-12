/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let i = 0, j = nums.length - 1;
    while (nums[i]!== target && i<nums.length) {
       i++;
    }
    while(nums[j] !==target && j>-1){
        j--;
    }
    if(j-i<0){
        return 0
    }
    return j-i+1
};
console.log(search([5,7,7,8,8,10],9))


// var search = function (nums, target) {
//     let i = 0, j = nums.length - 1;
//     while (nums[i]!== target && i<nums.length) {
//        i++;
//     }
//     while(nums[j] !==target && j>-1){
//         j--;
//     }
//     if(j-i<0){
//         return 0
//     }
//     return j-i+1
// };