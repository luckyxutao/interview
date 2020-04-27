
function quickSort(nums) {

    sort(nums, 0, nums.length - 1);

}

function sort(nums, low, hight) {
    if (low >= hight) {
        return;
    }
    var i = patition(nums,low,hight);
    sort(nums,low,i-1);
    sort(nums,i+1,hight);

}
// [1,5,4,2]
function patition(nums, l, r) {
    // nums = [4, 1, 8, 2, 7, 6, 3];
    // 2 4 6  8
    // l = 0;
    let i = l+1;
    let j = r
    let pviot = nums[l];
    while (i <= j) {
        //降序  
        while (nums[i] > pviot && i <= j) {
            i++;
        }
        while (nums[j] < pviot && i <= j) {
            j--;
        }
        if (i <= j) {
            swap(nums, i, j)
            i++;
            j--;
        }
    }
    nums[l] = nums[j];
    nums[j] = pviot;
    return j;
}

function swap(nums, i, j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

var arr = [3,2,4,5,6,8];

// var arr = [1, 2, 8, 3, 10, 9, 4, 6];
quickSort(arr);
console.log(arr)