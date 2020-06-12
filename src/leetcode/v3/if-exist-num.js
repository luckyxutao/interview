
function exist(nums) {
    /*
        1.统计每个元素出现的次数，并得到maxCount
        2. 循环map，看看maxCount是否重复
    */
    let map = new Map();
    let maxCount = 0;
    for(let i = 0;i<nums.length;i++){
        let ele = nums[i];
        if(!map.has(ele)){
            map.set(ele,1);
        } else {
            map.set(ele,map.get(ele)+1);
        }
        maxCount = Math.max(maxCount,map.get(ele));
    }
    //遍历map，看看maxCount重复了没
    let count = 0;
    for([key,value] of map){
        if(value === maxCount){
            if(count === 1){
                return false;
            }
            count++;
        }
    }
    return true;
}

console.log(exist([1, 2, 3,3]));