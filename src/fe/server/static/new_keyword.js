
function instant(fn,...args) {
    var obj = create(fn.prototype);
    var result = fn.call(obj,...args);
    //如果是对象
    if(typeof result === 'object' && result!==null){
        return result;
    } else {
        return obj;
    }
}



function create(proto) {
    var fNOP = function () { }
    fNOP.prototype = proto;
    return new fNOP();
}

function Person() {
    return []
}
Person.prototype.name = 'tao.xu'
Person.prototype.show = function () {}

var f = instant(Person)
var c;