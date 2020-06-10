function Parent(name) {
    this.name = name;
}
Parent.prototype.sayName = function() {
    console.log('parent name:', this.name);
}
function Child(name, parentName) {
    Parent.call(this, parentName);  
    this.name = name;    
}

function create(prototype){
    function fNop(){

    };
    fNop.prototype = prototype;
    return new fNop();
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
Child.prototype.sayName = function(...args){
    Parent.prototype.sayName.call(this,...args);
    console.log('from son');
    
}
// var parent = new Parent('father');
// parent.sayName();    // parent name: father

var child = new Child('son', 'father');
child.sayName()
