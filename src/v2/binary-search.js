/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let leftPos = searchIndex(nums, target, true);
    if (leftPos == -1) {
        return 0
    }
    //右边距
    let rightPos = searchIndex(nums, target, false);
    return rightPos - leftPos + 1;
};
/*
    第三个参数是方向，找最左还是最右,true表示左
    

*/
function searchIndex(nums, target, left) {
    //[ho, hi )，左闭右开
    let lo = 0, hi = nums.length, mid;
    while (lo < hi) {
        mid = lo + Math.floor((hi - lo) / 2);
        if (nums[mid] === target) {
            //左闭右开,虽然mid已经用过了，因为右边是开区间，因此是mid
            if (left) {//如果是找最左边的
                hi = mid;
            } else {
                lo = mid + 1;//找最右边的，左边是闭区间，不能重复用(mid)
            }
        } else if (nums[mid] > target) {
            hi = mid;
        } else if (nums[mid] < target) {
            lo = mid + 1; //左边是闭区间，不能再用mid位置了
        }
    }
    //左查找
    if (left) {
        //最后是lo=rigith
        if (lo === nums.length || nums[lo] !== target) {
            return -1;
        }
        return nums[lo] == target ? lo : -1;
    } else {
        //right是不合格的，最后等于right了需要-1
        if (lo == 0) {
            return -1;
        }
        return nums[lo - 1] == target ? lo - 1 : -1;
    }
}
console.log(searchIndex([2, 3, 3, 4], 1, false))

/*
1.最右
答：类似之前的左侧边界搜索，因为 while 的终止条件是 left == right，就是说 left 的取值范围是 [0, nums.length]，所以可以添加两行代码，正确地返回 -1：

if (left == 0) return -1;
return nums[left-1] == target ? (left-1) : -1;

2. 最左

if (left >= nums.length || nums[left] != target)
    return -1;
return left;

*/