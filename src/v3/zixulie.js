// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function (nums) {
//     /*
//     1. 计算每二进制位
//     */
//     let res = 0;
//     let mask = 1;
//     let middd = 1;
//     for (let i = 0; i < 32; i++) {
//         let cnt = 0;
//         for (let j = 0; j < nums.length; j++) {
//             let cur = nums[j];
//             if ((cur & mask) !== 0) {
//                 cnt++;
//             }
//         }
//         //目标数字i位是0
//         if (cnt % 3 == 0) {
//             middd <<= 1;
//             res = res + middd;
//         } else {//i位是1

//             res = res + 
//         }
//         //左移1位
//         mask <<= 1;
//     }

// };


// singleNumber([3, 4, 3, 3])

let str = '01010'
let mask = 1;
let i = 0;
let num = 0;
while(i<str.length){
    let cur = str.charAt(i);
    if(cur === '1'){
        num = num + mask;
    }
    mask<<=1;
    i++;
}
console.log(num)