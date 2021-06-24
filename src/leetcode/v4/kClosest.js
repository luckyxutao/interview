/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    let sorted = mergeSort(points,0,points.length-1);
    return sorted.slice(0,k);
};
function mergeSort(points,low,hi){
  if(low>=hi){
    return points[low];
  }
  let mid = Math.floor((low+hi)/2);
  let a = mergeSort(points,low,mid);
  let b = mergeSort(points,mid+1,hi);
  return merge(a,b);
}
function merge(a,b){
  let res = [];
  while(a.length && b.length){
    if(distance(a[0])<=distance(b[0])){
      res.push(a.pop());
    } else {
      res.push(b.pop());
    }
  }
  return a.length ? res.concat(a) : res.concat(b);
}
function distance([x,y]){
  return Math.pow(x,2) + Math.pow(y,2);
}
const points = [[1,3],[-2,2]], K = 1;
console.log(kClosest(points,K))
/*
输入：points = [[1,3],[-2,2]], K = 1
输出：[[-2,2]]
解释： 
(1, 3) 和原点之间的距离为 sqrt(10)，
(-2, 2) 和原点之间的距离为 sqrt(8)，
由于 sqrt(8) < sqrt(10)，(-2, 2) 离原点更近。
我们只需要距离原点最近的 K = 1 个点，所以答案就是 [[-2,2]]。

*/




// /**
//  * @param {number[][]} points
//  * @param {number} k
//  * @return {number[][]}
//  */
//  var kClosest = function(points, k) {
//   let sorted = points.sort((a,b)=>{
//     return distance(a) - distance(b)
//   });
//   return sorted.slice(0,k);
// };
// function distance([x,y]){
// return Math.pow(x,2) + Math.pow(y,2);
// }

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
  quickSort(points,0,points.length-1);
  return points.slice(0,k);
};
function quickSort(points,low,hi){
if(low>=hi){
  return;
}
let i = partition(points,low,hi);
quickSort(points,low,i-1);
quickSort(points,i+1,hi);
}
function partition(points,low,hi){
let pivot = points[low];
let i = low+1, j = hi;
while(i<=j){
  while(i<=j && distance(points[i]) <= distance(pivot)){
    i++;
  }
  while(i<=j && distance(points[j]) >= distance(pivot)){
    j--;
  }
  if(i<=j){
    let tmp = points[i];
    points[i] = points[j];
    points[j] = tmp;
  }
}
points[low] = points[j];
points[j] = pivot;
return j;
}
function distance([x,y]){
return Math.pow(x,2) + Math.pow(y,2);
}
const points = [[1,3],[-2,2]], K = 1;
console.log(kClosest(points,K))
/*
输入：points = [[1,3],[-2,2]], K = 1
输出：[[-2,2]]
解释： 
(1, 3) 和原点之间的距离为 sqrt(10)，
(-2, 2) 和原点之间的距离为 sqrt(8)，
由于 sqrt(8) < sqrt(10)，(-2, 2) 离原点更近。
我们只需要距离原点最近的 K = 1 个点，所以答案就是 [[-2,2]]。

*/




// /**
//  * @param {number[][]} points
//  * @param {number} k
//  * @return {number[][]}
//  */
//  var kClosest = function(points, k) {
//   let sorted = points.sort((a,b)=>{
//     return distance(a) - distance(b)
//   });
//   return sorted.slice(0,k);
// };
// function distance([x,y]){
// return Math.pow(x,2) + Math.pow(y,2);
// }