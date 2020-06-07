function Person(name){
    this.name = name;
}
Person.prototype.show = function(){
    console.log(this.name)
}
Wuman.prototype = new Person;

function Wuman(...args){
    Person.apply(this,args);
}

Wuman.prototype.show = function(...args){
    console.log('before')
    Person.prototype.show.apply(this,args);
    console.log('done')
}


var p1 = new Wuman('san');
p1.show()