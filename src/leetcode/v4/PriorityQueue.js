class PriorityQueue {
    constructor(type){
        this.pq = [];
    }
    top(){
        return this.pq[0];
    }
    left(index){
        return index*2+1;
    }
    right(index){
        return index*2+2;
    }
    parent(index){
        return Math.floor((index-1)/2);
    }
    swim(){
        //最后一个元素 开始上浮
        let childIndex = this.pq.length-1;
        let lastEle = this.pq[childIndex];
        let parentIndex = this.parent(childIndex);
        //一直和新元素比较
        while(childIndex>0 && lastEle<this.pq[parentIndex]){
            this.pq[childIndex] = this.pq[parentIndex];
            childIndex = parentIndex;
            parentIndex = this.parent(childIndex);
        }
        this.pq[childIndex]= lastEle;
    }
    sink(){
        let parentIndex = 0;
        let childIndex = this.left(parentIndex);
        let topEle = this.pq[0];
        let size = this.pq.length;
        while(childIndex<size){
            //如果 有右孩子，且
            if(childIndex+1<size && this.pq[childIndex+1]< this.pq[childIndex]){
                childIndex++;
            }
            if(topEle <this.pq[childIndex]){
                break;
            }
            this.pq[parentIndex] = this.pq[childIndex];
            parentIndex = childIndex;
            childIndex = this.left(parentIndex);
        }
        this.pq[parentIndex] = topEle;
    }
    pop(x){
        let head = this.pq[0];
        this.pq[0] = this.pq[this.pq.length-1];
        this.sink();
        this.pq.pop();
        return head;
    }
    push(x){
        this.pq.push(x);
        this.swim();
    }
}
module.exports = PriorityQueue;
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.min = new PriorityQueue();
    this.max = new PriorityQueue();
  };
  
  /** 
   * @param {number} num
   * @return {void}
   */
  MedianFinder.prototype.addNum = function(num) {
    this.min.push(num);
    this.max.push(this.min.top()*-1);
    this.min.pop();
    if(this.min.length < this.max.length){
        this.min.push(this.max.top()*-1);
        this.max.pop();
    }
  };
  
  MedianFinder.prototype.findMedian = function() {
      const {min,max} = this;
      if(min.length > max.length){
          return this.min.top();
      } else {
          return 0.5 * (min.top() + max.top()*-1);
      }
};

var m = new MedianFinder();
m.addNum(2);
m.addNum(3);
m.addNum(4);
console.log(m.findMedian());

// let arr = [5,7,2,6,1,10,4,100,3];
// let iMap = new PriorityQueue();
// for(let i = 0;i<arr.length;i++){
//     iMap.push(arr[i]*-1);
// }
// console.log(iMap.top()*-1);
// // class MinHeap{
// //     constructor(){
// //         // 存储元素的数组
// //         this.pq = []
// //     }
// //     swim(){
// //         let childIndex = this.pq.length-1;
// //         let parentIndex = this.parent(childIndex);
// //         let lastEle = this.pq[childIndex];
// //         while(childIndex>0 && lastEle < this.pq[parentIndex] ){
// //             this.pq[childIndex] = this.pq[parentIndex];
// //             childIndex = parentIndex;
// //             parentIndex = this.parent(childIndex);
// //         }
// //         this.pq[childIndex] = lastEle;
// //     }
// //     top(){
// //         return this.pq[0]
// //     }
// //     sink(){
// //         let parentIndex = 0;
// //         let temp = this.pq[parentIndex];
// //         let childIndex = 1;
// //         let size = this.pq.length;
// //         while (childIndex < size) {
// //             // 如果有右孩子，且右孩子大于左孩子的值，则定位到右孩子
// //             if (childIndex + 1 < size && this.pq[childIndex + 1] <=this.pq[childIndex]) {
// //                 childIndex++;
// //             }
// //             // 如果父节点大于任何一个孩子的值，直接跳出
// //             if (temp <= this.pq[childIndex]){
// //                 break;
// //             }
// //             //无须真正交换，单向赋值即可
// //             this.pq[parentIndex] = this.pq[childIndex];
// //             parentIndex = childIndex;
// //             childIndex = 2 * childIndex + 1;
// //         }
// //         this.pq[parentIndex] = temp;
// //     }
// //     pop(){
// //         let head = this.pq[0];
// //         this.pq[0] = this.pq[this.pq.length-1];
// //         this.sink();
// //         this.pq.pop()
// //         return head;
// //     }
// // }