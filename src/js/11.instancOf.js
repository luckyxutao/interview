function myInstanceOf(left,right){
    //
    const proto = right.prototype;
    while(left){
        if(left === proto){
            return true;
        }
        left = Object.getPrototypeOf(left)
    }
    return false;
}

function Person(){

}

let p = new Person();
//p.__proto__ === Person.prototype
console.log(myInstanceOf(Person,Function));
