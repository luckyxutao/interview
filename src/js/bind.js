
Function.prototype.bind = function(context,...args){
    /*
    1. 改作用域
    2. 绑定部分参数
    3. 如果是new调用 ，绑定的context无效
    */
   const thatFunc = this;
   function fNop(){};
   fNop.prototype = this.prototype;
   function fBound(...args2){
       let ctx = this instanceof fNop ? this : context;
        return thatFunc.apply(ctx,args.concat(args2))
   }
   fBound.prototype = new fNop();
   return fBound;
}
let obj = {
    name :'xutao'
}
function print(a,b){
    console.log(a+ this.name + b);
}

let Func = print.bind(obj,'a');
Func('b')