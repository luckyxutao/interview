/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let outStack = [];
    while(pushed.length){
        outStack.push(pushed.shift());
        //如果两者相同，则一尝试一起出栈
        while(outStack.length&&outStack[outStack.length-1] === popped[0]){
            outStack.pop();
            popped.pop();
        }
    }
    return popped.length === 0;
};

validateStackSequences(
    [1,2,3,4,5],[4,5,3,2,1])