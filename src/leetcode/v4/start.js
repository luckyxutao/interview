var kClosest = function(points, k) {
  let sorted = mergeSort(points,0,points.length-1);
  return sorted.slice(0,k);
};
function mergeSort(points,low,hi){
if(low>=hi){
  return [points[low]];
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
    res.push(a.shift());
  } else {
    res.push(b.shift());
  }
}
  return a.length ? res.concat(a) : res.concat(b);
}
function distance([x,y]){
return Math.pow(x,2) + Math.pow(y,2);
}
const points = [[3,3],[5,-1],[-2,4]], K = 2;
console.log(kClosest(points,K))