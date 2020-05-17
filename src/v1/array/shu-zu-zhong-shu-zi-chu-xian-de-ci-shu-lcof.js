/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
    let ret = 0; 
    for(let i=0;i<nums.length;i++){
        ret ^= nums[i];
    }
    // a^b = ret 3
    // 001  1
    // 010  2
    // 011  3 //只要等于1,就说明a与b不同，可以根据这个来分成两组

    //
    /**
     * 001
     * 100 F
     * 001 T
     * 011
     * 100 F
     * 110 F
     * 010 F
     */
    let h = 1;
    while((h & ret) === 0){//直遇到和ret完全相反的
        h<<=1; //1->10->100>
    }
    let a=0,b=0;
    let resA=[],resB=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i] & h){
            resA.push(nums[i])
        } else {
            resB.push(nums[i])
        }
    }
    // ret = 是1^2 目标数字的异或结果
};

// console.log(singleNumbers([4, 1, 4, 6, 6, 2]));

// 001
// 010


// 100 = 3



// var a = 5;//00000101
// //00001010

// console.log(1^2)
// 001
// 010
// 011 =3 
// 100 =4


// 010 = 2
// 101 =3 

// var a =1;
// while(a<=10){
//     console.log(a);
//     a<<=1;
// }

// // a<<=1;
// console.log(2&3)
// // 0011011

    //    64  32  16  8  4  2  1
// //  1   1    0  0  1  0  0

// 001
// 010

// // 011
// 1 1 1 = 7
// 4 2 1 = 1
//     4 2 1
//     1 0 1 => 5
//             0001 ->1

//             10100 =>20
//             01001 => 9
//             11101
