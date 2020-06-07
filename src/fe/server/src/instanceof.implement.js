
function myInstaneOf(L,R){
    let rProto = R.prototype;
    let cur = L.__proto__;
    while(L){
        if(cur === rProto){
            return true;
        }
        cur = cur.__proto__;
    }
    return false;
}

// console.log([] instanceof Object)
console.log(myInstaneOf([],Object))