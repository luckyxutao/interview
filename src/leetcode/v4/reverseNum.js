/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let max = Math.pow(2,31)-1;
  let min = Math.pow(-2,31);
  let num = x;
  let res = 0;
  while(num!==0){
    let last = num % 10;
    res = res*10 + last;
    if(num>0){
      num = Math.floor((num / 10));
    } else if(num<0){
      num = Math.ceil(num/10)
    }

    if (res > max || res <min) {
      return 0;
    }
  }
  return res;
};
console.log(reverse(-2147483412))