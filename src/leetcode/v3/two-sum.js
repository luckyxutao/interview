// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let map = new Map();
//     /*
//         建一个map,统计每个数的索引
//     */
//     for(let i = 0;i<nums.length;i++){
//         let cur = nums[i];
//         if(map.has(target-cur)){
//             return [map.get(target-cur),i]
//         }
//         if(!map.has(nums[i])){
//             map.set(cur,i);
//         }

//     }
// };

// console.log(twoSum([3,2,4],6))

let num = [2,3,4,5];
let res = 1;
for(let i = 0;i<num.length;i++){
    res = res * num[i]
}
console.log(res)