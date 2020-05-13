

function inherits(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
}

function Person(name) {
    this.name = name;
}

Person.prototype.greetMsg = function (msg) {
    console.log(`${this.name}..${msg}`);
}

function Man() {
    //调用构造 函数
    Person.apply(this,arguments);
}
inherits(Man,Person);

Man.prototype.greetMsg = function(msg){
    //重写父类函数
    console.log('from subclass');
    Person.prototype.greetMsg.call(this, msg);
}


var f = new Man('zhangsan');
f.greetMsg('sss')