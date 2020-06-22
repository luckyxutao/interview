// const { prototype } = require("koa");

// // 这个是要实现的方法
// createClass = function(sons, supor){
//     sons.prototype = Object.create(supor.prototype);
//     sons.prototype.constructor = sons;
//     sons.__proto__ = supor;
//     // // TODO
//     // return fn;
// }


class Human {
    constructor(msg){
        this.msg = msg;
        console.log('construct',msg);
        
    }
    static print(mmm){
        console.log(mmm);
        
    }
}

// 这是个 es6 的一个例子，要实现 extends 的功能。
class Man{
    constructor (args) {
        // super(args)
      // xxxxx
    }

    speak() {
        console.log('')
    }
}

function createClass(sons,supers){
    Object.setPrototypeOf(sons,supers.prototype);
    sons.prototype.constructor = sons;
    sons.__proto__ = supers;
    return sons;
}

let MAN = createClass(Man,Human);

let m = new MAN('111');
MAN.print('ggg')
// createClass(Man,Human);