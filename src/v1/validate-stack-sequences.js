/**
 * https://leetcode-cn.com/problems/validate-stack-sequences/solution/yan-zheng-zhan-xu-lie-by-leetcode/
 */
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    if (pushed.length !== popped.length) {
        return false;
    }
    // 声明一个stack，
    let stack = [];
    //按照pop队列比较（出栈顺序）
    while (popped.length) {
        //每次从队列取一个元素
        let top = popped[0]; //队列顶部元素
        //将push队列元素按栈的顺序入栈，比较栈顶元素是否等于pop
        while (stack[stack.length-1] !== top && pushed.length > 0) {
            //将push队列按顺序依次入栈
            stack.push(pushed.shift());
        }
        //如果相同，则都出栈
        if(stack[stack.length-1] === top){
            stack.pop();
            popped.shift();
        } else {
            return false;
        }

        // i++
    }
    return popped.length > 0 ? false : true;
};

let pushed = [1, 2, 3, 4, 5];
let popped = [4, 3, 5, 1, 2];
/**
 * [];
 * [1,2];
 * [1,2]
 * 
 */
console.log(validateStackSequences(pushed, popped))