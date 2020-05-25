var MaxQueue = function() {
    this._queue = [];
    this._maxQueue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    return this._maxQueue.length > 0 ? this._maxQueue[this._maxQueue.length-1] : -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this._queue.unshift(value);
    if(!this._maxQueue.length){
        this._maxQueue.push(value);
    } else {
        let i = 0;
        //将queue里比新值小的全换成新值
        while(this._maxQueue[i] < value && i<this._maxQueue.length){
            this._maxQueue[i] = value;
            i++;
        }
        this._maxQueue.unshift(value);
    }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    this._queue.pop();
    this._maxQueue.pop();
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

 var maxQueue = new MaxQueue();
 maxQueue.push_back(3);
 maxQueue.push_back(5);
 maxQueue.push_back(2);
 maxQueue.push_back(4);
maxQueue.pop_front()
 console.log(maxQueue.max_value());
 