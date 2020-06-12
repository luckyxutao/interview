/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    /*
    1. 统计每位1的个数，如果是3的倍数 则目标数该位是0，否则该位是1
    */
    let mask = 1;
    let res = 0;
    for(let i = 0;i<32 ;i++){
        let numberOfOne = 0;
        for(let i = 0;i<nums.length;i++){
            let digit = nums[i];
            if((digit & mask) ==1){
                numberOfOne++;
            }
        }
        mask<<=1;
        //表明该位是1，否则该位是0
        /*
            1110
        */
        if(numberOfOne % 3 !== 0){
            res = res + Math.pow(2,i)
        }

    }
    return res;
};
singleNumber([3,4,3,3])