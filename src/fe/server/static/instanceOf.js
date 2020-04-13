function instanceOf(L,R) {
    var left = Object.getPrototypeOf(L);
    while(left){
        if(left === R.prototype){
            return true;
        }
        left = Object.getPrototypeOf(left);
    }
    return false;
}

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
//   console.log(auto instanceof Car);
//   console.log(instanceOf(auto,Car));
  
//   // expected output: true
  
// console.log(auto instanceof Object);
console.log(instanceOf(auto,Object));