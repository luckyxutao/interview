/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let lo = 0, hi = x,ans=-1;
    while(lo < hi){
        let mid = lo + Math.floor((hi-lo)/2);
        let res = mid*mid;
        if(res === x){
            return mid;
        } else if( res > x){
            hi = mid-0.01;
            // hi = mid-0.01;
        } else if( res < x){
            ans = mid;
            lo = mid+0.01;
            // lo = mid+0.01;
        }
    }
    return ans;
};

console.log(mySqrt(2147395599))