/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var left = searchPariton(nums,target,'left'),right = searchPariton(nums,target,'right');
    if(left==-1||right ==-1){
        return 0
    } else {
        return right - left +1;
    }
};

function searchPariton(nums,target, direction){
    var start = 0, end = nums.length-1,mid;
    while(start+1<end){
        mid = start + Math.floor((end-start)/2);
        if(target === nums[mid]){
            if(direction === 'left'){
                end = mid;
            } else {
                start = mid;
            }
        } else if(target > nums[mid]){
            start = mid;
        } else {
            end = mid;
        }
    }
    if(direction === 'left'){
        if(nums[start] === target){
            return start;
        } else if(nums[end] === target){
            return end;
        } else {
            return -1;
        }
    }
    if(direction === 'right'){
        if(nums[end] === target){
            return end;
        } else if(nums[start] === target){
            return start;
        } else {
            return -1;
        }
    }
}

var res = search([0,1,2,3,4,6,7,8,9]);
console.log(res)