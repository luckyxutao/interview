/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let res = '';
  for(let i = 0;i<s.length;i++){
    const str1 = palindrome(s,i,i);
    const str2 = palindrome(s,i,i+1)
    res = str1.length > res.length ? str1 : res;
    res = str2.length > res.length ? str2 : res;
  }
  return res;
};
function palindrome(s,l,r){
  while(l>=0&& r<s.length && s.charAt(l) === s.charAt(r)){
    l--;
    r++;
  }
 return s.substr(l + 1, r - l - 1)
}
console.log(longestPalindrome('babad'));