/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    let res = [];
    let visited = new Set();
    dfsHelper(m, n, k, 0, 0, visited, res);
    console.log(res)
    return res.length;
};
/**
 * 00 01 02 03 04 05 06 07
 * 10 11 12 13 14 15 16 17
 * 20 21 22 23 24 25 26 27
 * 
 */
function dfsHelper(m, n, k, i, j, visited, res) {
    //m,n边界长度，i,j当前坐标,res结果
    //边界检查
    if (i >= m || i < 0 || j < 0 || j >= n) {
        return
    }
    //如果坐标和大于k则走不通
    if (twoSum(i,j) > k) {
        return;
    }
    //如果已经访问过了不算
    let coordStr = i + ',' + j;
    if (visited.has(coordStr)) {
        return;
    }
    visited.add(i + ',' + j);
    res.push([i, j]);
    dfsHelper(m, n, k, i, j + 1, visited, res);//向右
    dfsHelper(m, n, k, i + 1, j, visited, res);//向下
    dfsHelper(m, n, k, i, j - 1, visited, res);//左
    dfsHelper(m, n, k, i - 1, j, visited, res);//向上
}

function twoSum(a,b){
    let sum = 0;
    while(a){
        sum = sum + a % 10;
        a = Math.floor(a/10);
    }
    while(b){
        sum = sum + b % 10;
        b = Math.floor(b/10);
    }
    return sum;
}

// console.log(twoSum(35,37))
console.log(movingCount(11, 8, 16))

// 0,1,2,3,4,5,6,7


// function bbb() {
//     let i = 0,j= 0;
//     let m = 11,n = 8, k = 16;
//     let res = [];
//     for(let i = 0;i<m;i++){
//         for(let j = 0;j<n;j++){
//             res.push([i+','+j])
//         }
//     }
//     debugger;
// }

// bbb();
