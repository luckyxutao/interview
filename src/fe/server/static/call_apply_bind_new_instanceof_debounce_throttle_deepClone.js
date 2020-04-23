function instant(fn, ...rest) {
    var obj = Object.create(fn.prototype);
    var results = fn.apply(obj, rest);
    if (typeof results === 'object' && results !== null) {
        return results;
    } else {
        return obj;
    }
}

function myInstanceOf(L, R) {
    L = Object.getPrototypeOf(L);
    R = R.prototype;
    while (L) {
        if (L === R) {
            return true;
        }
        L = Object.getPrototypeOf(L);
    }
    return false;
}

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
}
function throttle(fn, delay) {
    let runing = false;
    return function (...args) {
        if (runing) {
            return;
        }
        runing = true;
        setTimeout(() => {
            fn.apply(null, args)
            runing = false;
        }, delay);
    }
}


Function.prototype.myCall = function (otherThis, ...args) {
    var smb = Symbol('11')
    otherThis[smb] = this;
    otherThis[smb](...args);
    delete otherThis[smb];
}

Function.prototype.myApply = function (otherThis, args) {
    var smb = Symbol('11')
    otherThis[smb] = this;
    otherThis[smb](...args);
    delete otherThis[smb];
}

/*
部分参数绑定
bind过的函数可以new
new this处理
*/
Function.prototype.myBind = function (otherThis, ...args1) {
    var bindFunction = this;//这是函数本身
    var fNOP = function () { };

    fNOP.prototype = this.prototype;

    var fBound = function (...args2) {
        let context = this instanceof fNOP ? this : otherThis;
        return bindFunction.apply(context, [...args1, ...args2]);
    }
    fBound.prototype = new fNOP();

    return fBound;
}

function deepClone(obj, memo = new WeakMap()) {
    //基本类型或null
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (typeof obj === 'function') {
        return obj;
    }
    if (obj instanceof Date) {
        return new Date(obj);
    }
    if (memo.has(obj)) {
        return memo.get(obj);
    }
    var inst = new obj.constructor;
    memo.set(obj, inst);
    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            inst[k] = deepClone(obj[k], memo);
        }
    }
    return inst;
}

var cc = {
    a: 1,
    g:function(){
        console.log('fff')
    },
    b: {
        c: 1,
        h: {
            w: 2
        }
    }
}
cc.dup = cc;
var g = deepClone(cc);

console.log(cc.b.c)





// function Print(a, b, c) {
//     console.log(a, b, c)
//     console.log(this.name);
// }
// var obj = {
//     name: 'zhang31'
// }
// var bindedPrint = Print.myBind(obj,'a','b');
// // new bindedPrint('c');
// bindedPrint('c');


// var ff = throttle(console.log, 1000);
// var count=0;
// var id = setInterval(() => {
//     ff(count)
//     count++;
//     if(count>1000){
//         clearInterval(id);
//     }
// }, 500);
