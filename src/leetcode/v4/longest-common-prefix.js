/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs || !strs.length){
        return ''
    }
    let minLen = 99999;
    for(let str of strs){
        minLen = Math.min(minLen,str.length);
    }
    let lo = 0, hi = minLen-1;
    while(lo<=hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(isCommonPrefix(strs,mid)){
            lo = mid+1;
        } else {
            hi = mid-1;
        }
    }
    return strs[0].slice(0,hi)
};

function isCommonPrefix(strs,len){
    let prefix = strs[0].slice(0,len);
    for(let i = 0;i<strs.length;i++){
        let str = strs[i];
        if(!str.startsWith(prefix)){
            return false
        }
    }
    return true;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))