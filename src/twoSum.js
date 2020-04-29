

/**
 * @param {number[]} nums
 * @return {string}
 */
var twoSum = function(nums, target) {
    let i = 0, j = nums.length-1;
    let temp;
    while(i<=j){
        temp = nums[i] + nums[j];
        if(temp === target){
            return [nums[i],nums[j]];
        } else if(temp < target){
            i++
        } else {
            j--;
        }
    }
};

var result = twoSum([6,16,18,24,30,32],48);
console.log(result)


// var twoSum = function(nums, target) {
//     let res = [];
//     for(let i =0; i<nums.length;i++){
//         for(let j = i+1;j<nums.length;j++){
//             if(nums[i] === target-nums[j]){
//                 res.push(nums[i]);
//                 res.push(nums[j]);
//                 return res;
//             }
//         }
//     }
//     return res;
// };