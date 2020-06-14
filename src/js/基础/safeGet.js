let obj = {2 : '2', a: 1, b: { c: 2 }, d: [1, 2, 3], e: [{ f: [4, 5, 6] }] };

function parse2(obj, str) {
    return new Function('obj', 'return obj.' + str.replace(/\.(\d+)/g, '\[$1\]'))(obj);
}

function parse(obj,str){
    str = str.replace(/\[(.+?)\]/g,'.$1');
    let newObj;
    let prev = obj;
    str.split('.').forEach(key=>{
        newObj = prev[key]
        prev = newObj;
    });
    return newObj;
}
let r1 = parse(obj, 'a');// = 1;
let r2 = parse(obj, 'b.c');// = 2;
let r3 = parse(obj, 'd[2]');// = 3;
let r4 = parse(obj, 'e[0].f[0]');// = 4;
console.log(r1,r2,r3,r4);

let www = 'abba'
console.log(/(\w)(\w)\2\1/.test(www));
