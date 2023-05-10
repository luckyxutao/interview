/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
  let res = [];
  let target = n*n;
  let num = 1;
  let l = 0, r = n-1, t = 0, b = n-1;
  while(num<=target){
    for(let i = l;i<=r;i++){
      if(!res[t]){
        res[t] = [];
      }
      res[t][i] = num++;
    }
    t++;
    for(let i = t;i<=b;i++){
      if(!res[i]){
        res[i] = [];
      }
      res[i][r] = num++;
    }
    r--;
    for(let i = r;i>=l;i--){
      if(!res[b]){
        res[b] = [];
      }
      res[b][i] = num++;
    }
    b--;
    //t已经加过了
    for(let i = b;i>=t;i--){
      if(!res[i]){
        res[i] = [];
      }
      res[i][l] = num++;
    }
    l++;
  }
  console.log(res);
};
generateMatrix(3)
/*
输入：n = 3
输出：[
  [1,2,3],
  [8,9,4],
  [7,6,5]]
*/