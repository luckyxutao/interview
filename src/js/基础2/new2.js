function instant(fn,...args){
    var o = Object.create(fn.prototype);
    var res = fn.apply(o,args);
    return typeof res === 'object' ? res : o;
}