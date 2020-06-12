/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    /*
        [0,1,2,3,4,5,6,7,8,9]
        1. 1 * 9 = 9
           2 * 90 = 180
           3 * 900 = 2700
           ...
    */
    //[0-9]
    if (n < 10) {
        return n;
    }

    let numWidth = 2;
    const baseN = 9;
    let numSum = 9;
    let segmentStart = 10;

    while (true) {
        //189 = 9 + 10*9*2
        // 189 + 100* 9 * 3
        //两位才是从10-99 
        segmentStart = Math.pow(10, numWidth - 1);
        let v2 = segmentStart * baseN * numWidth;
        numSum = numSum + v2
        if (numSum > n) {
            numSum -= v2;
            break;
        }
        numWidth++;//2

    }
    /*
        nmWidth= 2
        segmentStart = 10(含)
        365-189
    */
    let diff = n - numSum;//176
    let target = (segmentStart - 1) + Math.ceil(diff / numWidth);
    //确定 在target上的位置

    let mod = diff % numWidth;
    target = target + ''
    if (mod === 0) {
        //则是最后一个元素
        return target.charAt(target.length - 1);
    } else {
        /*
            1,2,3  4,5,6  7,8,9
            8  8/3 = 3 = [7,8,9]
            8 % 3 = 2
        */
        return target.charAt(mod - 1);
    }
};


console.log(findNthDigit(365))












