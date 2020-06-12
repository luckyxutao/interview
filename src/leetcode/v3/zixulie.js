let sp = [4,5];
let i = sp.length-1;
let num = 2
while(i>=0 && num < sp[i]){
    i--;
}
sp.splice(i,0,num)
console.log(sp)

// /**
//  * @param {number} num
//  * @return {number}
//  */
// var translateNum = function(num) {
//     if(num<10){
//         return 1;
//     }
//     let str = num + '';
//     let dp = [1,1];

//     for(let i = 2;i<str.length;i++){
//             let tmp = parseInt(str.slice(i - 2, i), 10) || 0;
//             if(tmp >=10 && tmp <=25){
//                 dp[i] = dp[i-2] + dp[i-1];
//             } else {
//                 dp[i] = dp[i-1];
//             }
//     }
//     return dp[dp.length-1]
// };
// translateNum(12258)