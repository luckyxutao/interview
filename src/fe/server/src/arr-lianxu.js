function isArrLianXu(arr) {
    var sortedArr = arr.sort((a, b) => a - b);
    var res = [];
    var ptr = 0;
    var temp = [];
    for (let i = 0; i < sortedArr.length; i++) {
        let next = sortedArr[i + 1];
        let cur = sortedArr[i];
        temp.push(cur);
        if (next - cur > 1) {
            if (temp.length === 1) {
                res.push(temp[0]);
            } else {
                res.push(`${temp[0]}-${cur}`);
            }
            temp = [];
        }
    }
    return res;
}

// 当出现连续数字的时候以‘-’输出
console.log(isArrLianXu([3, 4, 13, 14, 15, 17, 20, 21, 22]));

// var temp = [];
// var result = [];
// var sss  = [1, 2, 3, 4, 6, 8, 9, 10, 15, 16, 17, 18];
// var res  = sss.reduce((prev,next)=>{
//     temp.push(next);
//     if(next - prev > 1){
//         result.push(temp);
//         temp = [];
//     }
//     return next;
// });
// result.push(temp);
// console.log(result)