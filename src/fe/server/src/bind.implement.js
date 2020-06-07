// Function.prototype.bind = function (otherThis) {
//     var ArrayPrototypeSlice = Array.prototype.slice;
//     var thatFunc = this;
//     var baseArgs = ArrayPrototypeSlice.call(arguments, 1);
//     if (typeof thatFunc !== 'function') {
//             throw new TypeError('Function.prototype.bind - ' +
//              'what is trying to be bound is not callable');
//     }
//     var fBound = function () {
//         var funcArgs = baseArgs.concat(ArrayPrototypeSlice.call(arguments));
//         var ff = fNOP.prototype.isPrototypeOf(this);
//         return thatFunc.apply(ff ? this : otherThis, funcArgs);
//     };
//     var fNOP = function(){};
//     if(this.prototype){
//         fNOP.prototype = this.prototype;
//     }
//     // 这种方式会导致bind后的函数修改prototype，同时也会影响被bind的prototype
//     //  fBound.prototype = this.prototype;
//     fBound.prototype = new fNOP;//这样绑定后函数的只是（被绑定对象）的一个实例，通过__proto__可以访问，但是无法影响
//     return fBound;
// }
Function.prototype.bind = function(context,...args){
    let thatFunc = this;

    function fBound(...args2){
        let lastContext = this instanceof fNOP ? this : context;
        return thatFunc.apply(lastContext,args.concat(args2))
    }

    function fNOP(){}
    if(this.prototype){
        fNOP.prototype = this.prototype;
    }

    fBound.prototype = new fNOP();
    return fBound;
}

function add(msga,msgb){
    return msga + this.a + this.b + msgb;
}

let obj = {
    a : 1,
    b : 2
};

var newAdd = add.bind(obj,'result is : ');
// console.log(newAdd('done'))
console.log(new newAdd('done'))