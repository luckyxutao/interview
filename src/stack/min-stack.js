/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this._stack = [];
    this._stackMin = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (this._stackMin.length === 0) {
        this._stackMin.push(x);
    } else {
        var last = this._stackMin[this._stackMin.length - 1];
        if (x <= last) {
            this._stackMin.push(x);
        } else if (x > last) {
            this._stackMin.push(last);
        }
    }
    this._stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this._stackMin.pop();
    this._stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this._stack[this._stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this._stackMin[this._stackMin.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var minStack = new MinStack()
minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);
console.log(minStack.getMin());  
minStack.pop();
console.log(minStack.getMin());   
minStack.pop();
console.log(minStack.getMin())
// console.log(minStack.getMin());   
