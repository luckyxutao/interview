var MaxQueue = function() {
    this.queue = [];
    this.max_queue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(!this.max_queue.length){
        return -1;
    }
    return this.max_queue[this.max_queue.length-1]
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.unshift(value);
    //处理max_value栈
    let i = 0;
    while(this.max_queue[i] < value){
        this.max_queue[i] = value;
        i++
    }
    this.max_queue.unshift(value);

};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    this.max_queue.pop();
    return this.queue.pop();
};
var obj = new MaxQueue()
obj.push_back(1);
obj.push_back(2);
obj.push_back(3);
obj.push_back(4);
obj.push_back(2);
obj.push_back(1);
console.log(obj.pop_front())
/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */