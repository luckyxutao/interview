/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// var add = function(a, b) {
//     let carry = a ^ b ;//20
//     let temp = (a & b)<<1; //6
//     let init;
//     while(temp){//不为零，说明有进制
//         init = carry ^ temp; //用个变量先记住值，还不能改carry
//         temp = (carry & temp) << 1; //这步carry还是最初的值
//         carry = init;//init,新的数，temp新的数
//     }
//     return carry ^ temp;

//     // * 101010 = 42
//     // * 010101 = 21
//     // 没有进位
//     // if(temp === 0){
//     //     return sum;
//     // }
//     // temp<<=1;
//     // while(temp){
//     //     let sum = a ^ b ;
//     //     let temp = (a & b)<<1;
//     // }
//     // return c; 
//     // a&b(只有都为1才是1)，是0就表示没进位了
//     // while(a&b){
//     //     //0+0 0+1 1+0全好使，1+1=0（进位不好使）
//     //     //异或(加法，未正确处理进位) 
//     //     sum = a ^ b;

//     // }

//     // //0+0 0+1 1+0全好使，1+1=0（进位不好使）
//     // //异或(加法，未正确处理进位)
//     // let sum = a ^ b; //不包含进位（1^1)
//     // let b2 = (a & b);//能找到（两位全是1的），左移进位
//     // b2<<=1;
//     // return sum ^ b2;
// };
// console.log(add(42,21));

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    // 19+7
    //先求一次不考虑进位的加法
    //00->0 01->1 10->1, 11->0(进位，没处理)
    let carry = a ^ b; 
    //两位均是1的过滤出来，11进位
    let temp = (a & b)<<1;
    let init;
    //表示有进位（可能不止一个1）
    // carry=20, temp = 6
    while(temp){
        //变成了carry和temp的相加了(carry ^ temp);
        init = carry ^ temp; //这里先不修改carry和temp的值，下一步还要用到
        temp = (carry & temp)<<1; //取新的进位
        carry = init;
    }
    return carry ^ temp;
};
console.log(add(7,19));




/**
 * 101010 = 42
 * 010101 = 21
 */
/**
 *    00111 7 a
 *    10011 19 b
 *    10100 20 s=  a ^b(未正确处理进位)
 *    00110 6 c= a & b<<1(处理进位)
 *    10010 = 20^6 ->s
 *    00100 = 20 & 6
 *    01000 = 8
 *    10010 = 2-
 *    10100 = 20&6<<1
 *    001 10
 * 
 * 1000 8 
 * 
 * 
 */

// var add = function(a, b) {
//     //0+0 0+1 1+0全好使，1+1=0（进位不好使）
//     //异或(加法，未正确处理进位)
//     let sum = a ^ b; //不包含进位（1^1)
//     let b2 = (a & b);//能找到（两位全是1的），左移进位
//     b2<<=1;
//     b2<<=1
//     return sum ^ b2;
// };


// var add = function(a, b) {
//     //0+0 0+1 1+0全好使，1+1=0（进位不好使）
//     //异或(加法，未正确处理进位)
//     let sum = a ^ b; //不包含进位（1^1)
//     let b2 = (a & b);//能找到（两位全是1的），左移进位
//     b2<<=1;
//     return sum ^ b2;
// };