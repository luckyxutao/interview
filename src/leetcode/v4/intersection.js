/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let aSet = new Set(nums1);
    let bSet = new Set(nums2)
    let res = [];
    if(aSet.size < bSet.size){
        for(let num of aSet){
            if(bSet.has(num)){
                res.push(num)
            }
        }
    } else {
        for(let num of bSet){
            if(aSet.has(num)){
                res.push(num)
            }
        }
    }
    return res;
};

let nums1 = [1,2,2,1], nums2 = [2,2];
console.log(intersection(nums1,nums2))