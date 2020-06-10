
Function.prototype.call2 = function(context,...args){
    let oldValu = context._xx_;
    context._xx_ = this;
    let result = context._xx_(...args);
    context._xx_ = oldValu;
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

