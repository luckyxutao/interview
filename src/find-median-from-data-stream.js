/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.store = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.store.length === 0) {
        this.store[0] = num;
    } else {
        //[1,2,3,8,10]
        let j = this.store.length - 1;
        while (j >= 0 && num < this.store[j]) {
            j--;
        }
        this.store.splice(j + 1, 0, num);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    let n = this.store.length;
    //奇数
    return (n & 1) ? this.store[Math.floor(n / 2)] : (this.store[Math.floor(n / 2)] + this.store[Math.floor(n / 2) - 1]) / 2;
};
// ["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
// [[],[1],[2],[],[3],[]]
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var obj = new MedianFinder();
obj.addNum(1);
obj.addNum(2);
console.log(obj.findMedian());
