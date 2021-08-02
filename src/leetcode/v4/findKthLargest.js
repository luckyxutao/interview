/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    let heapSize = nums.length;
    buildMaxHeap(nums,heapSize);
    let res = [];
    for(let i = 0;i<nums.length;i++){
      if(res.length===k){
        break;
      }
      res.push(nums[0]);
      swap(nums,0, --heapSize);
      buildMaxHeap(nums,heapSize);
    }
    return res[res.length-1]
  };
  
  function buildMaxHeap(nums,heapSize){
    for(let i = Math.floor((heapSize-1-1)/2);i>=0;i--){
      maxHeapify(nums,i,heapSize);
    }
  }
  
  function maxHeapify(nums,i,heapSize){
    let largest = i;
    let l = 2*i+1;
    let r = 2*i + 2;
    if(l<heapSize && nums[l]> nums[largest]){
      largest = l;
    }
    if(r<heapSize && nums[r] > nums[largest]){
      largest = r;
    }
    if(largest !== i){
      swap(nums,i,largest);
      maxHeapify(nums,largest,heapSize)
    }
  }
  
  
  function swap(arr,i,j){
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j]= tmp;
  }
  console.log(findKthLargest([1],1));