/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    /**
     * 如果最大值-最小值大于5则false
     * 有重复元素false
     */
    //已经是升序了，sorted[0]最多，sorted[4]最大
    let sorted = nums.sort((a,b)=> a-b);
    let joker = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
        let cur = sorted[i];
        let next = sorted[i + 1];
        //大小王
        if (cur === 0) {
            joker++;
        } /// 如果有重复元素，返回false
        else if (sorted[i] === sorted[i + 1]) {
            return false;
        } else if (next - cur > 1) {
            let needJoker = next - cur - 1; //差1是不需要的
            joker -= needJoker;
            if(joker<0){
                return false;
            }
        } else {
            continue;
        }
    }
    if (joker < 0) {
        return false;
    }
    return true;
};

console.log(isStraight([10,11,0,12,6]));