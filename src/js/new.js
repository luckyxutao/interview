
function New(func,...args){
    let res = {};
    let ret = func.apply(res,args);
    if(ret !== null && (typeof ret === 'object' || typeof ret === 'function')){
        return ret;
    } else {
        return res;
    }
}

// function Person(){
//     return function(){
//         console.log('aaa')
//     }
// }
// let np = new Person();
// console.log(np);
