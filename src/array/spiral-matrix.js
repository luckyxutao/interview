/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix || matrix.length == 0) {
        return [];
    }
    var L, R, T, B;//左，右，上，下
    L = 0, R = matrix[0].length - 1, T = 0, B = matrix.length - 1;
    var res = [];

    // console.log(L,R,T,B);
    while (L <= R && T <= B) {
        for (let i = 0; i < matrix.length; i++) {
            let aL = L, aR = R;
            if (aL > aR) {
                return res;
            }
            while (aL <= aR) {
                res.push(matrix[i][aL]);
                aL++;
            }
            let aT = T + 1, aB = B;
            if (aT > aB) {
                return res;
            }
            while (aT <= aB) {
                res.push(matrix[aT][R]);
                aT++;
            }
            let sR = R - 1, sL = L;
            if (sR < sL) {
                return res;
            }
            while (sR >= sL) {
                res.push(matrix[B][sR])
                sR--;
            }
            let tB = B - 1, tT = T;
            if (tB <= tT) {
                return res;
            }
            while (tB > tT) {
                res.push(matrix[tB][L]);
                tB--;
            }
            L++;
            R--;
            T++;
            B--;
        }
    }
    return res;
};

// var matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];
var matrix = [[2,5,8],[4,0,-1]]
var res = spiralOrder(matrix);
console.log(res);

