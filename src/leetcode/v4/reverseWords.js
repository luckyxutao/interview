/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  if(!s.length){
    return;
  }
  s = s.trim();
  let i = 0;
  let res = ''
  while(i<s.length){
    let word = ''
    while(i<s.length && s.charAt(i)!==''){
      word = word + s.charAt(i);
      i++;
    }
    res = word + '' + res;
    while(i<s.length && s.charAt(i)=== ''){
      i++;
    }
  }
  return res;
};
console.log(reverseWords("the sky is blue"));