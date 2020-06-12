/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let i = 0, j = nums.length-1;
    while(i<j){
        //如果left是奇数，则跳过
        while(nums[i] % 2 == 1){
            i++;
        }
        //如果right是偶数，则跳过
        while(nums[j] % 2 == 0){
            j--;
        }
        if(i<j){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
    return nums;
};

console.log(exchange([1,2,3,4,5]))