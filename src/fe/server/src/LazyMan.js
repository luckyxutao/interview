function LazyMan(params) {
    this.tasks = [];
    setTimeout(()=>{
        this.next();
    }, 0);
}

LazyMan.prototype.next = function(){
    let task = this.tasks.pop();
    task && task();
}

LazyMan.prototype.do1 = function(msg){
    const do1 = ()=>{
        console.log(msg);
        this.next();
    }
    this.tasks.unshift(do1);
    return this;
}
LazyMan.prototype.do2 = function(msg){
    const do1 = ()=>{
        console.log(msg);
        this.next();
    }
    this.tasks.unshift(do1);
    return this;
}
LazyMan.prototype.do3 = function(msg){
    const do1 = ()=>{
        console.log(msg);
        this.next();
    }
    this.tasks.unshift(do1);
    return this;
}
LazyMan.prototype.asleep = function(delay){
    const do1 = ()=>{
        console.log('assleep',delay)
        setTimeout(()=>{
            this.next();
        },delay)
    }
    this.tasks.unshift(do1);
    return this;
}

var f = new LazyMan('mmmmm')
f.do1('do1').asleep(3000).do2('do2').asleep(1000).do3('do3');
f.do1();