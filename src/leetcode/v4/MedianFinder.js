const PriorityQueue = require('../lib/PriorityQueue');
//maxQueueueueue
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.largerQ = new PriorityQueue();
    this.smallerQ = new PriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    //如果minQ小于max，才往min里放，大于等于时都往maxQ里放，
    //如果是奇数5,如果不一样多，则一定maxQ多
    if(this.smallerQ.size()<this.largerQ.size()){
        //往大的添加
        this.largerQ.push(num*-1);
        this.smallerQ.push(this.largerQ.pop()*-1)
    } else {
        //往大的添加
        this.smallerQ.push(num);
        this.largerQ.push(this.smallerQ.pop()*-1)
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.largerQ.size() > this.smallerQ.size()){
        return this.largerQ.top()*-1
    } else {
        return .5*(this.largerQ.top()*-1 + this.smallerQ.top())
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    this.store = [];
  };
  
  /** 
   * @param {number} num
   * @return {void}
   [1]
   */
  MedianFinder.prototype.addNum = function(num) {
    if(!this.store.length){
      this.store.push(num);
    } else {
      let i = this.store.length-1;
      let pos = this.store.length;
      while(i>=0 && num < this.store[i]){
        if(i<0){
          break;
        }
        pos--;
        i--;
      }
      this.store.splice(pos,0,num);
    }
  };
  
  MedianFinder.prototype.findMedian = function() {
    let len = this.store.length;
    let midIndex = Math.floor((this.store.length) /2);
    if(len % 2 ==0){
      return (this.store[midIndex] + this.store[midIndex-1])*0.5;
    } else {
      return this.store[midIndex];
    }
  };
  
  var i = new MedianFinder();
  i.addNum(1);
  i.addNum(2);
  // i.findMedian();
  console.log(i.findMedian());