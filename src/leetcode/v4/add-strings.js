/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let beiShu = 1;
    /*
    0.1  0.12
    */
   let reg = /\.(\d+)$/g
    let [matched,gn1] = reg.exec(num1);
    reg.lastIndex=0;
    let [matched2,gn2] = reg.exec(num2);
    let maxLen = Math.max(gn1.length,gn2.length);
    let k = 0;
    while(k<maxLen){
        beiShu = beiShu*10;
        k++;
    }

    num1 = num1*beiShu + ''
    num2 = num2*beiShu + ''

    let i = num1.length-1, j = num2.length-1;
    let res = '';
    let carry = 0;
    while(i>=0||j>=0){
        let top = parseInt(num1.charAt(i),10) || 0;
        let bottom = parseInt(num2.charAt(j),10) || 0;
        let sum = top + bottom + carry;
        carry = sum > 9 ? 1 : 0;
        res = (sum % 10) + '' +res;
        i--;
        j--;
    }
    if(carry){
        res = carry+res;
    }
    return res/beiShu;
};
/*  
    5899
     325



*/
console.log(addStrings('0.1','0.002'))