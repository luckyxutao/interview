/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix || matrix.length == 0) {
        return [];
    }
    /*
        1，2，3
        4，5，6
        7，8，9

    */
    var L, R, T, B;//左，右，上，下，4堵墙
    L = 0, R = matrix[0].length - 1, T = 0, B = matrix.length - 1;
    let res = [];
    while (L <= R && T <= B) {
        for (let k = 0; k < matrix.length; k++) {
            //水平，1，2，3，不能改L
            let vL = L;//左边起始点
            if(vL>R){
                return res;
            }
            while (vL <= R) {
                res.push(matrix[k][vL]);
                vL++;
            }
            let vT = T;
            vT++;
            if(vT>B){
                return res;
            }
            while (vT <= B) {
                res.push(matrix[vT][R]);
                vT++;
            }
            /*
                1. 底部边打印
                2.右边包含了2，2，因此直接从下一次开始
            */
            let vR = R;
            vR--;
            if(vR<L){
                return res;
            }
            while (vR>=L) {
                res.push(matrix[B][vR]);
                vR--;
            }
            /*
             1. 左边垂直
             2. 
            */
            let vB = B;
            vB--;
            if(vB<=T){
                return res;
            }
            while (vB > T) {
                res.push(matrix[vB][L]);
                vB--;
            }
            L++;
            R--;
            T++;
            B--;
        }
    }

}

console.log(spiralOrder([[1,11],
                        [2,12],
                        [3,13],
                        [4,14],
                        [5,15],
                        [6,16],
                        [7,17],
                        [8,18],
                        [9,19],
                        [10,20]
                    ]));