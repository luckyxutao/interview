/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if (!nums) {
        return [];
    }
    if (k > nums.length) {
        return [];
    }
    let startIndex = 0;
    let queue = [];
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        startIndex = i - k + 1; //窗口最小起始索引，主要用来判断queue里的最大值索引是否滑出
        let maxIndex = queue[queue.length - 1];
        if (maxIndex < startIndex) { //最右边值是最大值的索引，如果索引小于本次窗口起始值的话，删除
            queue.pop();
        }
        let lastEle = nums[queue[queue.length - 1]];
        //用队列里最大元素和当前元素比，如果当前元素大，则清空队列，直接添加
        if (queue.length === 0) {
            queue.push(i);
        } else if (nums[i] >= lastEle) {
            queue.length = 0;
            queue.push(i);
        } else if (nums[i] < lastEle) {//如果当前元素小于队列里最大的元素，则需要利用队列性质，将其放到尾部，2. 并且将当小于当前元素索引删除，始终保持左->右升序
            // 如果当前元素小于 queue中索引对应元素，则将小于当前元素全干掉，始终保持 左右到右升序
            let j = 0
            while (j < queue.length) {
                if (nums[i] > nums[queue[j]]) {
                    queue.shift();
                    continue;
                }
                j++
            }
            queue.unshift(i);
        }
        if (startIndex >= 0) {
            console.log('changkou', startIndex, i);
            res.push(nums[queue[queue.length - 1]]);
        }
    }

    return res;

};

console.log(maxSlidingWindow([2, 3, 4, 2, 6, 2, 5, 1], 3));