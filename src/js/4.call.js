
Function.prototype.call2 = function(context,...args){
    let fn = Symbol();
    context[fn] = this;
    let result = context[fn](...args);
    delete context[fn];
    return result;
}

let foo = {
    value: 1
}
function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}
bar.call2(foo, 'black', '18') // black 18 1

