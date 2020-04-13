//通过weakmap解决了循环引用问题
/*
1. weakmap的key只能是对象类型
2. weakmap只有get set has delete，weakmap对对象是弱类型引用，一旦没其它对象引用，则会自动回收
3. 

*/
function shallowCopy(obj) {
    var newObj = {};
    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            newObj[k] = obj[k];
        }
    }
    return newObj;
}

function deepCopy(obj,weakMap= new WeakMap()) {
    if (!obj) {
        return obj;
    }
    if(weakMap.has(obj)){ //如果相同对象已经在weakmap里了，第二次再调用会找到
        return weakMap.get(obj)
    }
    if (typeof obj === 'object') {
        if (obj instanceof Date) {
            return new Date(obj);
        }
        if (obj instanceof RegExp) {
            return new RegExp(obj);
        }
        var inst = new obj.constructor;
        weakMap.set(obj,inst)
        for (let k in obj) {
            if (obj.hasOwnProperty(k)) {
                inst[k] = deepCopy(obj[k],weakMap)
            }
        }
        return inst;
    } else {
        return obj;
    }
}

// var now = new Date();
// // console.log(now);

// let obj = {
//     a: 100,
//     // b: [100, 200, 300],
//     // c: {
//     //     x: 10
//     // },
//     // createDate: now,
//     // d: /^\d+$/
// };
// obj.f = obj;
// var dup = deepCopy(obj);
// console.log(dup.f.a);
