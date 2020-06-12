/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    /*
    1. 升序,统计大、小王数量 kingCount
    2. 遍历从非0开始，旦遇到不连续的，kingCount--
    3. 如果循环能遍历到最后结束，说明是顺子，否则不是
    */
    nums.sort((a,b)=>{return a-b});
    let kingCount = 0;
    let i = 0;
    //统计大小王数量
    while(i<nums.length && nums[i]===0){
        kingCount++;
        i++;
    }
    while(i<nums.length-1){
        let diffLen = nums[i+1]-nums[i];
        if(diffLen > 1){
            kingCount-=(diffLen-1);
            if(kingCount<0){
                return false;
            }
        } else if(diffLen == 0){//相同的，肯定不是顺子
            return false;
        }
        i++;
    }
    return true;



};

isStraight([10,11,0,12,6])