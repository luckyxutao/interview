/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    /*
        1 2 3
          4 5

          2
          3
    */
    let res = [];
    for(let i = num1.length-1;i>=0;i--){
        for(let j = num2.length-1;j>=0;j--){
            let p1 = i+j, p2 = i+j+1;
            let sum = (res[p2]||0) + num1.charAt(i) * num2.charAt(j);
            res[p2] = sum % 10;
            res[p1] = (res[p1]||0) + Math.floor(sum / 10);
        }
    }
    /*
    0 5 5 5
    */
    while(res.length && res[0]=== 0){
        res.shift();
    }
    return res.join('');
};
multiply('2', '3')
// 1  2   3
//    4   5