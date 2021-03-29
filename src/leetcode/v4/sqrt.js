/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let lo = 0, hi = x, ans = -1;
    while(lo<=hi){
        let mid = lo + Math.floor((hi-lo)/2);
        let pow = mid * mid;
        if(pow === x){
            ans = mid;
            break;
        } else if( pow < x){
            ans = mid;
            lo = mid+1;
        } else if( pow > x){
            hi = mid-1;
        }
    }
    console.log(ans);
};

console.log(mySqrt(16));