/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (num) {
    const sumObj = {count:0};
    const newArr = helper(num, 0, num.length - 1,sumObj);
    console.log(newArr);
    
    return sumObj.count;
};

function helper(num, lo, hi,sumObj) {
    if (lo >= hi) {
        return [num[lo]]
    }
    let mid = lo + Math.floor((hi - lo) / 2);
    let leftSorted = helper(num, lo, mid,sumObj);
    let rightSorted = helper(num, mid + 1, hi,sumObj);
    return merge(leftSorted, rightSorted,sumObj);
}
//[1,8],[2,9]
function merge(aNum, bNum,sumObj) {
    let res = [];
    while (aNum.length && bNum.length) {
        //left小
        if(aNum[0] > bNum[0]){
            sumObj.count = sumObj.count + bNum.length;
            res.push(aNum.shift());
            //等于的不算逆对，只有大于的才算
        } else if(aNum[0] === bNum[0]){
            res.push(bNum.shift());
        } else {
            res.push(bNum.shift());
        }
    }
    return aNum.length > 0 ? res.concat(aNum) : res.concat(bNum);
}


console.log(reversePairs([1,3,2,3,1]))
// console.log(reversePairs([7, 5, 6, 4]))

// 7 5, 6 4 

// 2 

// 5,7   4 6




// 7 




/** 暴力法
7分别和[5,6,4]比，5分别和[6,4]比，6分别和[4]比 = 3 + 1 + 1 = 5
 * @param {number[]} nums
 * @return {number}
 */
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