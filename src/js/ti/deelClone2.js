function deepClone(obj,map = new WeakMap()){
    if(map.get(obj)){
        return map.get(obj);
    }
    if(obj!==null && typeof obj === 'object'){
        if(obj instanceof Date){
            return new Date(obj);
        } else if(obj instanceof RegExp){
            return new RegExp(obj);
        }
        let inst = new obj.constructor();
        map.set(obj,inst);
        for(let k in obj){
            inst[k] = deepClone(obj[k],map) 
        }
        return inst;
    } else {
        return obj;
    }
}

// function deepClone(obj, map = new WeakMap()) {
//     if (map.has(obj)) {
//         return map.get(obj);
//     }

//     if (obj !== null && typeof obj === 'object') {
//         if (obj instanceof Date) {
//             return new Date(obj);
//         } else if (obj instanceof RegExp) {
//             return new RegExp(obj);
//         }
//         let inst = new obj.constructor();
//         map.set(obj, inst);
//         for (let key in obj) {
//             inst[key] = deepClone(obj[key], map);
//         }
//         return inst;
//     } else {
//         return obj;
//     }
// }

let obj = {
    a: [1, 2, 3, [4, 5]],
    b: {
        f: 1,
        d: 2
    },
    g: false,
    n: 'str',
    time: Date.now()
};
obj.left = obj

let copied = deepClone(obj);
console.log(copied);
