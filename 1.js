/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let res = { count:0}
    let map = new Map();
    movingCountHelper(m,n,0,0,k,res,map);
    return res.count;
};
function movingCountHelper(rowLen,columnLen,i,j,k,res,map){
    if(i<0 || i>= rowLen || j<0 || j>=columnLen){
        return ;
    }
    //检查坐标合
    if(coordSum(i) + coordSum(j) > k){
        return ;
    }
    let key = `${i}_${j}`;
    if(map.has(key)){
        return ;
    }
    map.set(key,1);
    res.count++;
    movingCountHelper(rowLen,columnLen,i,j+1,k,res,map);//向右
    movingCountHelper(rowLen,columnLen,i+1,j,k,res,map);//向下
    movingCountHelper(rowLen,columnLen,i,j-1,k,res,map);//向左
    movingCountHelper(rowLen,columnLen,i-1,j,k,res,map);//向上
}

function coordSum(num){
    let sum = 0;
    while(num>0){
        sum +=  num % 10;
        num = Math.floor(sum / 10);
    }
    return sum;
}