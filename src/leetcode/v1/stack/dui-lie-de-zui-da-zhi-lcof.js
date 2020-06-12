var MaxQueue = function () {
    this._queue = [];
    this._maxQueue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    if (this._maxQueue.length === 0) {
        return -1;
    }
    return this._maxQueue[this._maxQueue.length - 1];

};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
    this._queue.unshift(value);
    if (this._maxQueue.length > 0) {
        let j = 0;
        // 从最左开始比较，凡是比当前值小的统统替换为当前值
        while (value > this._maxQueue[j] && j < this._maxQueue.length) {
            this._maxQueue[j] = value;
            j++;
        }
        this._maxQueue.unshift(value);
    } else {
        this._maxQueue.unshift(value);
    }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    if (this._queue.length === 0) {
        return -1;
    }
    this._maxQueue.pop();
    return this._queue.pop();
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
var obj = new MaxQueue();
obj.push_back(1);
obj.push_back(3);
obj.push_back(2);
obj.push_back(4);
obj.push_back(0);
obj.push_back(2);
console.log(obj.max_value());
console.log(obj.pop_front());
console.log(obj.max_value());

