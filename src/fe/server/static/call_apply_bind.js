
Function.prototype.call = function (otherContext, ...args) {
    var ids = Symbol();
    otherContext[ids] = this;
    otherContext[ids](...args);
    delete otherContext[ids];
}
Function.prototype.apply = function (otherContext, args) {
    var ids = Symbol();
    otherContext[ids] = this;
    otherContext[ids](...args);
    delete otherContext[ids];
}


Function.prototype.bind = function (otherContext, ...args) {
    var fNOP = function () { };
    var func = this;
    function fBound(...args2) {
        var context = fNOP.prototype.isPrototypeOf(this) ? this : otherContext;
        return func.apply(context, args.concat(args2));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP
    return fBound;
}

function Person() {
    console.log(this.name);
    
}

Person.prototype.name = 'xutao';

var cc = {
    name : 'zhangCC'
};

var BoundedPerson = Person.bind(cc);
BoundedPerson.prototype.name =  'boundndndnd';
// BoundedPerson();
// var d = new BoundedPerson();

var pp = new Person();

// var fff = {
//     name: 'ux',
// }

// function bb(addr) {
//     console.log(this.name, addr);

// }
// var name = 'c3c3'
// bb.apply(fff, ['second2'])