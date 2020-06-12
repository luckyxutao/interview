/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = new Map();
    map.set('}','{');
    map.set(')','(');
    map.set(']','[');
    let stack = [];//后进先出
    for(let i = 0;i<s.length;i++){
        let c = s.charAt(i);
        //说明到了右半边了，
        if(map.has(c)){
            let needLeftC = map.get(c);
            let realLeftC = stack.pop();
            if(needLeftC !== realLeftC){
                return false;
            }
        } else {//左半部分
            stack.push(c);
        }
    }
    return stack.length === 0;
};

isValid('()')