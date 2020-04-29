

/**
 * @param {number[]} nums
 * @return {string}
 */
var twoSum = function(nums,target) {
    let res = [];
    for(let i = 0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] === target - nums[j]){
                res.push([i,j])
            }
        }
    }
};

var result = twoSum([2, 7, 11, 15],9);
console.log(result)