/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    /*
        1. 快慢指针，i慢，j快
        2. 当j遇到不同元素时
    */
    let i = 0; j = 0;
    while (j < nums.length) {
        while (nums[j] == nums[i]) {
            j++;
        }
        if(j>=nums.length){
            break;
        }
        nums[i + 1] = nums[j];
        i++;
        if(j === nums.length-1){
            break;
        }
    }
    return i + 1;
};

let nums = [1,2,3,3,4];
let len = removeDuplicates(nums);
console.log(nums.slice(0,len));

/*
[0,0,1,1,1,2,2,3,3,4];
i=0,j=2
[0,1],i=1,j
*/
