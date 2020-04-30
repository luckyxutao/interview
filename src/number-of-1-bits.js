/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let h = 1; //000000000001
    let count = 0;
    while(n>0){
        n = n & (n-1);
        count++;
    }
    return count;
};



console.log(hammingWeight(8));
//9  001101
//7  000010
//   00001

// var hammingWeight = function(n) {
//     let h = 1; //000000000001
//     let count = 0;
//     for(let i=0;i<32;i++){
//         if((h & n) === 0){

//         } else {
//             count++;
//         }
//         h<<=1;//左移
//     }
//     return count;
// };