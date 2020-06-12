var CQueue = function() {
    this.stackIn = [];
    this.stackOut = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackIn.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(!this.stackOut.length){
        while(this.stackIn.length){
            this.stackOut.push(this.stackIn.pop());
        }
    }
    if(this.stackOut.length){
        return this.stackOut.pop();
    }
    return -1

};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

var obj = new CQueue()
obj.appendTail('555')
obj.appendTail('666')
var param_2 = obj.deleteHead()
console.log(param_2);
console.log(obj.deleteHead());
