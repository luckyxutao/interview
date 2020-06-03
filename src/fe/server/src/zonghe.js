
Number.prototype.add = function(n){
    return this + n;
}
Number.prototype.minus = function(n){
    return this - n;
}
console.log( (5).add(3).minus(2))

var a={}, b='123', c=123;
a[b]='b';
a[c]='c' ;
console.log(a[b]); 