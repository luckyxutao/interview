function instant(ClassFunc,...args){
    let obj = Object.create(ClassFunc.prototype);
    let res = ClassFunc.apply(obj,args);
    return res !== 'null' && typeof res === 'object' ? res : obj;
}




function Person(){

}
