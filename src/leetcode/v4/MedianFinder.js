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