/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let i = 0;j= nums.length-1;
    while(i<j){
        if(nums[i]%2 === 1){
            i++;
            continue;
        }
        if(nums[j]%2=== 0){
            j--;
            continue;
        }
        if(i!==j){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
    return nums;
};

console.log(exchange([1,2,3,4,5,6,7,8,9,10]))