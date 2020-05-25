/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    if (pushed.length !== popped.length) {
        return false;
    }
    /*
    贪心算法，
    1. 建一个辅助栈，将push元素一直放，直到元素等于popped顶部元素， 一块出栈
    */
    let N = pushed.length;
    let stack = [];
    let j = 0;
    for (let i = 0; i < N; i++) {
        stack.push(pushed[i]);
        //和popped栈顶元素比较
        while (stack.length > 0 && popped.length > 0 && stack[stack.length-1] == popped[j]) {
            stack.pop();
            j++;
        }
    }
    return stack.length == 0;

};

validateStackSequences([1,2,3,4,5],[4,5,3,2,1])