/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    if(!nums||!nums.length){
        return false;
    }

    nums.sort((a,b)=>a-b);
    
    let kingOfNums = 0;
    let start = 0;
    while(nums[start]===0){
        kingOfNums++;
        start++;
    }
    
    for(let i = start;i<nums.length;i++){
        let diff = nums[i] - nums[i-1];
        if( diff ===0 ){
            return false;
        } else if(diff > 1){
            let needKings = diff-1;
            kingOfNums-=needKings;
            if(kingOfNums<0){
                return false;
            }
        }
    }
    return true;
};

isStraight([0,0,8,5,4])

