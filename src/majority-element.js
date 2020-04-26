/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    return majorityElementRec(nums, 0, nums.length - 1);
};
function majorityElementRec(nums,start,end){
    if(start===end){
        return nums[start]
    }
    //[1,2,3,4,5] mid =2 [0,2][3,4]
    let mid = start + Math.floor(Math.floor(end-start)/2);
    //分别找 两个字数组里的众数
    let left = majorityElementRec(nums,start,mid);
    let right = majorityElementRec(nums,mid+1,end);
    //如果两边找到众数同，则说明是当前nums里的众数
    if(left === right){
        return left;
    }
    //如果两边众数不同，则分别统计两边出现的次数，出现次数多的是众数（可能有多个都超过一半了
    let leftCount = countInArr(nums,left,start,end);
    let rightCount = countInArr(nums,right,start,end);
    return leftCount > rightCount ? left : right;
}
function countInArr(nums,num,start,end){
    let count = 0;
    for(let i = start;i<=end;i++){
        if(nums[i] === num){
            count++;
        }
    }
    return count;
}

var ss = [1, 2, 1, 1, 2, 2, 5, 2, 4, 2];
var g = majorityElement(ss);
console.log(g);



// var majorityElement = function (nums) {
//     var map = new Map();
//     var cur;
//     for (let i = 0; i < nums.length; i++) {
//         cur = nums[i];
//         if(map.has(cur)){
//             map.set(cur,map.get(cur)+1)
//         } else {
//             map.set(cur,1);
//         }
//     }
//     for([key,value] of map){
//         if(value > nums.length /2){
//             return key;
//         }
//     }
// };