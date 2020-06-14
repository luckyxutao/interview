
function deepClone(target, map = new WeakMap()) {
    if (map.has(target)) {
        return map.get(target);
    }
    if (typeof target === 'object') {
        let toString = Object.prototype.toString;
        let ObjectType = toString.call(target);
        if (ObjectType === '[object Date]') {
            return new Date(target);
        } else if (ObjectType === '[object RegExp]') {
            return new RegExp(target);
        }
        let inst = new target.constructor;
        //在这里就要放map里，否
        map.set(target, inst);
        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                inst[key] = deepClone(target[key], map)
            }
        }
        return inst;
    } else {
        return target;
    }
}

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    name:true,
    age:'ccc',
    field4: [2, 4, 8]
};

target.target = target;

const result = deepClone(target);

console.log(result);