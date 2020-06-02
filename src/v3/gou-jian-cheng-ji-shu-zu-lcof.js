/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {

    /*
    dp[i] = dp[i-1] + dp[i-2](有条件)
    */
    let res = 0;
    while(num>0){
        let digit = num % 100;
        num = Math.floor(num / 10);
        if(digit >=0 && digit <=25){
            res = res +  helper(n-1) + helper(n-2);
        } else {
            res = res +  helper(n-1);
        }
    }
    return res;

};

function helper(n){
    if(n==1){
        return 1;
    }
    return 1 + helper(n-1);
}

translateNum(12258)